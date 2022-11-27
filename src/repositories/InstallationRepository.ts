import { Optional } from "sequelize";
import { InstallationException } from "../exceptions";
import { Installation } from "../entities/Installation";
import { InstallationModel } from "../models/database/InstallationModel";

class InstallationRepository {

  
    public async create(installation: Readonly<Installation>): Promise<InstallationModel> {

        return InstallationModel.create(installation);
    }

    public findById(id: number): Promise<InstallationModel> {
      
        return InstallationModel.findOne({
            where : { id: id }
        });
    }

    public findAll(): Promise<Array<InstallationModel>> {
        return InstallationModel.findAll();
    }

    public findByName(name: string): Promise<InstallationModel> {
        return InstallationModel.findOne({
            where : { name: name }
        });
    }
}

export const installationRepository = new InstallationRepository();

