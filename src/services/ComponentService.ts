import { DeviceModel } from "../models/database/DeviceModel";
import { Device, DeviceInterface, DeviceType } from "../entities/Device";
import { ciredComponentService } from "./cired/CiredComponentService";
import { openhabComponentService } from "./openhab/OpenhabComponentService";

export interface ComponentServiceInterface {

    upsertAllByDevice(device: Device): void;


}


class ComponentService {

    public async upsertAllByDevice(device: Device) {
        this.getComponentService(device.type).upsertAllByDevice(device);
    }

    /**
     * 
     * @param deviceType 
     * @returns 
     */
     private getComponentService(deviceType: DeviceType): ComponentServiceInterface {
        if (deviceType == DeviceType.cired) {
            return ciredComponentService;
        }else if (deviceType == DeviceType.openhab) {
            return openhabComponentService;
        }

    }
}


export const componentService: ComponentService = new ComponentService();