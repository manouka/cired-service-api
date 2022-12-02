import { Request, RequestMethod } from "../../entities/Request";
import { Device, DeviceType } from "../../entities/Device";
import { CoordinatorModel } from "../../models/database/CoordinatorModel";
import { DeviceServiceInterface } from "../DeviceService";
import { openhabCoordinatorService } from "./OpenhabCoordinatorService";
import { OpenHabItem } from "../../entities/openhab/OpenhabItem";
import { DeviceModel } from "../../models/database/DeviceModel";
import { deviceRepository } from "../../repositories/DeviceRepository";
import { componentService } from "../ComponentService";


class OpenhabDeviceService implements DeviceServiceInterface {

    public scanDeviceRemaining = 0;

    public async scanAllDevices(coordinator: CoordinatorModel): Promise<Array<Device>> {

        let items: Array<OpenHabItem> = await openhabCoordinatorService.getAllItems(coordinator);
   
        let devices: Array<Device> = [];
        
        for (let i = 0; i < items.length; i++) {

            let address: string = items[i].link.split(`${coordinator.host}:${coordinator.port}${openhabCoordinatorService.items}/`)[1];
            let device = new Device();
            device.alias = `device_${ DeviceType.openhab}_${address}`;
            device.information = items[i];
            device.type = DeviceType.openhab;
            device.address = address;

            let deviceModel: DeviceModel = await deviceRepository.create(device);
            deviceModel.$set('coordinator', coordinator);
            await deviceModel.save();
           
            devices.push(deviceModel);    

            await componentService.upsertAllByDevice(deviceModel)
        }

        return devices;
    }

}

export const openhabDeviceService: OpenhabDeviceService = new OpenhabDeviceService();