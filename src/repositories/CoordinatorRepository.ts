import { Coordinator } from "../entities/Coordinator";
import { CoordinatorModel } from "../models/database/CoordinatorModel";

class CoordinatorRepository {

    public async create(coordinator: Coordinator): Promise<CoordinatorModel> {

        const [coordinatorModel, created] = await CoordinatorModel.findOrCreate({
            where: { host: coordinator.host },
            defaults: { coordinator }
        });

        return coordinatorModel;
    }

    public findById(id: number): Promise<CoordinatorModel> {

        return CoordinatorModel.findByPk(id);
    }

    public findAll(): Promise<Array<CoordinatorModel>> {

        return CoordinatorModel.findAll();
    }

    public findByInstallationId(installationId: number): Promise<Array<CoordinatorModel>> {
        return CoordinatorModel.findAll({ where: { installationId : installationId } });
    }
}

export const coordinatorRepository: CoordinatorRepository = new CoordinatorRepository();