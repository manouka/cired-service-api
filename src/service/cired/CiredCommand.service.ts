import { CiredAddressEntree, CiredCommandEntree, CiredCommandEntreeModel, ciredCommandEntreeValidator } from "../../model/cired/CiredCommandEntree.model";
import { CiredCommandAbstractModel } from "../../model/cired/CiredCommandAbstract.model";
import { CiredAddressException, CiredFlagException, CiredTimerException } from "../../exception";


class CiredCommandService {

    public async sendCommand<T extends CiredCommandAbstractModel>(ciredCommand: T) {

        // check la validité de la commande
        this.checkIsCommandValid(ciredCommand);




    }

    public checkIsCommandValid<T extends CiredCommandAbstractModel>(ciredCommand: T) {
        if (ciredCommand instanceof CiredCommandEntreeModel) {
            console.log('checkIsCommandValid')
            this.checkIsCommandEntreeValid(ciredCommand)
        }
    }

    public checkIsCommandEntreeValid<T extends CiredCommandEntreeModel>(ciredCommand: T) {

        let test = ciredCommandEntreeValidator.writeFlagState(ciredCommand);
        let test2 = ciredCommand.transform();
        console.log(test2)
 
    }
}

export const ciredCommandService = new CiredCommandService();