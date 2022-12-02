import { Device } from "../entities/Device";
import { deviceRepository } from "../repositories/DeviceRepository";
import { Coordinator, CoordinatorType } from "../entities/Coordinator";
import { ciredDeviceService } from "./cired/CiredDeviceService";
import { openhabDeviceService } from "./openhab/OpenhabDeviceService";
import { DeviceModel } from "../models/database/DeviceModel";
import { DeviceException } from "../exceptions/DeviceExceptions";

export enum DeviceAction {

}

export interface DeviceServiceInterface {

    scanAllDevices(coordinator: Coordinator): Promise<Array<Device>>;


}


class DeviceService {

    public async getAll(): Promise<Array<DeviceModel>> {
        return await deviceRepository.findAll()
    }

    public async scanAllDevices(coordinator: Coordinator) {

        try {
            await this.getDeviceService(coordinator.type).scanAllDevices(coordinator);
        } catch (error) {   
            // do nothing   
        }

    }

    public async getAllByCoordinatorId(coordinatorId: number): Promise<Array<DeviceModel>> {

        return await deviceRepository.findAllByCordinatorId(coordinatorId)
    }

    public async getAllByInstallationId(installationId: number): Promise<Array<DeviceModel>> {

        let devices: Array<DeviceModel> = await deviceRepository.findAllByInstallationId(installationId);

        return devices; 
    } 

    public async getById(deviceId: number): Promise<DeviceModel> {

        let device: DeviceModel = await deviceRepository.findById(deviceId);
        if (!device) {
            throw new DeviceException(DeviceException.notFound, `Device id ${deviceId} not found`)
        }

        return device; 
    } 

    public async upsert(device: Device, checkExistance: boolean = true) {



    }

    /**
     * 
     * @param coordinatorType 
     * @returns 
     */
     private getDeviceService(coordinatorType: CoordinatorType): DeviceServiceInterface {
        if (coordinatorType == CoordinatorType.ciredGateway || coordinatorType == CoordinatorType.ciredGatewayGsm) {
            return ciredDeviceService;
        } else if (coordinatorType == CoordinatorType.openhab) {
            return openhabDeviceService;    
        }

    }

}

export const deviceService: DeviceService = new DeviceService();