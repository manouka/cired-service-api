import { Device } from "src/entities/Device";
import { Coordinator, CoordinatorType } from "../entities/Coordinator";
import { ciredCoordinatorService } from "./cired/CiredCoordinatorService";
import { ciredDeviceService } from "./cired/CiredDeviceService";

export enum DeviceAction {

}

export interface DeviceServiceInterface {

    scanAllDevices(coordinator: Coordinator): Promise<Array<Device>>;


}


class DeviceService {

    public async getAll() {

    }

    public async scanAllDevices(coordinator: Coordinator) {

        this.getDeviceService(coordinator.type).scanAllDevices(coordinator);
    }

    public async upsert() {

    }

    private getDeviceService(coordinatorType: CoordinatorType): DeviceServiceInterface {
        if (coordinatorType == CoordinatorType.ciredGateway || coordinatorType == CoordinatorType.ciredGatewayGsm) {

            return ciredDeviceService;
        }

    }
}

export const deviceService: DeviceService = new DeviceService();