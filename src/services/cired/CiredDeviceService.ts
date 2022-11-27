import { Device } from "src/entities/Device";
import { CiredCommand } from "../../entities/cired/CiredCommand";
import { CiredActionSystem, CiredArea } from "../../entities/cired/describe";
import { Coordinator } from "../../entities/Coordinator";
import { DeviceServiceInterface } from "../DeviceService";
import { ciredCoordinatorService } from "./CiredCoordinatorService";
import { CiredResponse } from "../../entities/cired/CiredResponse";

class CiredDeviceService implements DeviceServiceInterface {
    public async scanAllDevices(coordinator: Coordinator): Promise<Array<Device>> {

        let command: CiredCommand = new CiredCommand(CiredActionSystem.readVersion);
        
       // CiredAddressScanRange.forEach(async (address: CiredAddress) => {

            command.setCompleteAddress(CiredArea.area_1, 0);
            console.log(command)
            let response: CiredResponse = await ciredCoordinatorService.sendCommand(coordinator, command);
            console.log(response)

        //});

        let devices: Array<Device>;
        return devices
    }
}

export const ciredDeviceService: CiredDeviceService = new CiredDeviceService();