import { Device, DeviceType } from "../../entities/Device";
import { CiredCommand } from "../../entities/cired/CiredCommand";
import { CiredActionSystem, CiredAddress, CiredAddressEntreeRange, CiredAddressRange, CiredAddressScanRange, CiredAddressSortieRange, CiredArea } from "../../entities/cired/describe";

import { DeviceServiceInterface } from "../DeviceService";
import { ciredCoordinatorService } from "./CiredCoordinatorService";
import { CiredResponse, CiredResponseCode } from "../../entities/cired/CiredResponse";
import { DeviceException } from "../../exceptions/DeviceExceptions";
import { timeConvert } from "../../tool/Convertor";
import { DeviceModel } from "../../models/database/DeviceModel";
import { CoordinatorModel } from "../../models/database/CoordinatorModel";
import { deviceRepository } from "../../repositories/DeviceRepository";
import { Coordinator } from "src/entities/Coordinator";
import { componentService } from "../ComponentService";


class CiredDeviceService implements DeviceServiceInterface {

    public scanDeviceRemaining = 0;

    public async scanAllDevices(coordinator: CoordinatorModel): Promise<Array<Device>> {

        if (this.scanDeviceRemaining > 0) {
            
            throw new DeviceException(DeviceException.scanAllreadyStarted, `Device cired scan allready started, wait for the end before waiting for a new one. Time remaining ${timeConvert(this.scanDeviceRemaining)}`)
        }

        this.scanDeviceRemaining = CiredAddressRange.length;

        let devices: Array<Device> = [];

        for (let i = 0; i < CiredAddressRange.length; i++) {
            let command: CiredCommand = new CiredCommand(CiredActionSystem.readVersion);

            command.setCompleteAddress(CiredArea.area_1, <CiredAddress>CiredAddressRange[i]);
            command.validate();

            let response: CiredResponse = await ciredCoordinatorService.sendCommand(coordinator, command);
           
            if (response.reponse != CiredResponseCode.ok) {
                await new Promise(f => setTimeout(f, 500));
            } else {
                // création de device
                let device = new Device();
                device.alias = `device_${ DeviceType.cired}_${CiredAddressRange[i]}`;
                device.information = response;
                device.type = DeviceType.cired;
                device.address = CiredAddressRange[i].toString();

                let deviceModel: DeviceModel = await deviceRepository.create(device);
                deviceModel.$set('coordinator', coordinator);
                await deviceModel.save();

                devices.push(deviceModel);

                await componentService.upsertAllByDevice(deviceModel)
                
            }

            this.scanDeviceRemaining--;
        }
        
        this.scanDeviceRemaining = 0;

        return devices
    }

}

export const ciredDeviceService: CiredDeviceService = new CiredDeviceService();