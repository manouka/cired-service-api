import { Coordinator, CoordinatorInterface, CoordinatorType } from "../entities/Coordinator";
import { installationService } from "./InstallationService";
import { coordinatorRepository } from "../repositories/CoordinatorRepository";
import { CoordinatorModel } from "../models/database/CoordinatorModel";
import { InstallationModel } from "../models/database/InstallationModel";
import { ciredCoordinatorService } from "./cired/CiredCoordinatorService";
import { CoordinatorException } from "../exceptions/CoordinatorExceptions";
import { Model } from "sequelize-typescript";

class CoordinatorService {

    public async upsert(coordinator: Coordinator, checkExistance: boolean = true) {

        if (checkExistance) {
            coordinator = await this.checkExistance(coordinator);
        }
        
        let coordinatorModel: CoordinatorModel = coordinator.id ? await this.getById(coordinator.id) : await coordinatorRepository.create(coordinator);

        Object.assign(coordinatorModel, coordinator)

        await coordinatorModel.save()

    }

    public async getById(id: number): Promise<CoordinatorModel> {

        let coordinator: CoordinatorModel = await coordinatorRepository.findById(id);

        if (!coordinator) {
            throw new CoordinatorException(CoordinatorException.notFound, `Coordinator id ${id} not found`)
        }

        return coordinator; 
    } 

    public async getAll(): Promise<Array<CoordinatorModel>> {

        return await coordinatorRepository.findAll();
    } 

    public async getAllByInstallationId(installationId: number): Promise<Array<CoordinatorModel>> {

        let coordinators: Array<CoordinatorModel> = await coordinatorRepository.findByInstallationId(installationId);

        if (!coordinators) {
            throw new CoordinatorException(CoordinatorException.notFound, `Not Coordinator found in installation ${ installationId }`)
        }

        return coordinators; 
    } 

    public async deleteById(id: number): Promise<void> {

        let coordinator: CoordinatorModel = await this.getById(id);

        coordinator.destroy();
    } 

    /**
     * Assigne un device sur une installation
     * 
     * @param installationId 
     * @param coordinatorId 
     */
    public async assignToInstallation(installationId: number, coordinatorId: number) {

        let promise: Array<Promise<Model>> = [];
        
        promise.push(installationService.getById(installationId));
        promise.push(this.getById(coordinatorId));
        
        let [ installationModel, coordinatorModel ] = <[InstallationModel, CoordinatorModel]>await Promise.all(promise);
        await Promise.all([installationModel, coordinatorModel]);

        coordinatorModel.$set('installation', installationModel); 

        await coordinatorModel.save()
    }
    

    private async checkExistance(coordinator: Coordinator): Promise<Coordinator> {
        try {
            return await this.requestInformation(coordinator);
        } catch (error) {

            throw new CoordinatorException(CoordinatorException.noReply, `Coordinator ${coordinator.host} don't respond`)
        }
    }

    private async requestInformation(coordinator: Coordinator): Promise<Coordinator> {

        return ciredCoordinatorService.requestInformation(coordinator);
    }

}

export const coordinatorService: CoordinatorService = new CoordinatorService();

