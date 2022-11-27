import { InstallationException } from "../exceptions";
import { Installation, InstallationInterface } from "../entities/Installation";
import { InstallationModel } from "../models/database/InstallationModel";
import { installationRepository } from "../repositories/InstallationRepository";

class InstallationService {

    public async create(installation: Installation) {

        // check si une installation n'existe pas déjà avec ce nom (unicité)
        let installationSearch: InstallationModel = await installationRepository.findByName(installation.name);
        if (installationSearch) {

            throw new InstallationException(InstallationException.alreadyExist, `Installation name ${installation.name} already exist`)
        }

        return installationRepository.create(installation);
    }

    public async update(installation: Installation) {

        // check si une installation n'existe pas déjà avec ce nom
        let installationSearch: InstallationModel = await installationRepository.findByName(installation.name);
        if (installationSearch && installationSearch.id != installation.id) {

            throw new InstallationException(InstallationException.alreadyExist, `Installation name ${installation.name} already exist`)
        }
        
        // recherche l'installation demandée
        installationSearch = await this.getById(installation.id);

        // miet à jour les données sur le modèle
        Object.assign(installationSearch, installation)

        return installationSearch.save();
    }

    public async getById(id: number): Promise<InstallationModel> {
        
        let installation: InstallationModel = await installationRepository.findById(id);
        if (!installation) {
            throw new InstallationException(InstallationException.notFound, `Installation id ${id} not found`)
        }

        return installation; 
    }  
    
    public async getAll(): Promise<Array<InstallationModel>> {

        let installations: Array<InstallationModel> = await installationRepository.findAll();
        if (!installations) {
            throw new InstallationException(InstallationException.notFound, `No installation found`)
        }

        return installations; 
    }
}

export const installationService: InstallationService = new InstallationService();