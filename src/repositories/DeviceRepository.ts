
import { CoordinatorModel } from "../models/database/CoordinatorModel";
import { Device } from "../entities/Device";
import { DeviceModel } from "../models/database/DeviceModel";

class DeviceRepository {

    public async create(device: Device): Promise<DeviceModel> {

        const [deviceModel, created] = await DeviceModel.findOrCreate({
            where: { alias: device.alias },
            defaults: <any>device
        });

        return deviceModel;
    }

    public async findById(deviceId: number): Promise<DeviceModel> {

        return await DeviceModel.findByPk(deviceId);
    }

    public async findAll(): Promise<Array<DeviceModel>> {

        return await DeviceModel.findAll();
    }

    public async findAllByCordinatorId(coordinatorId: number): Promise<Array<DeviceModel>> {
        const deviceModel: Array<DeviceModel> = await DeviceModel.findAll({
            where: { coordinatorId: coordinatorId }
        });

        return deviceModel;
    } 

    public async findAllByInstallationId(installationId: number): Promise<Array<DeviceModel>> {
        const deviceModel: Array<DeviceModel> = await DeviceModel.findAll({
            include: [{
                model: CoordinatorModel,
                where: { installationId: installationId },
                attributes: []
            }],
        });

        return deviceModel;
    } 
}

export const deviceRepository: DeviceRepository = new DeviceRepository();