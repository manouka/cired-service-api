import { CiredCommand } from "src/entities/cired/CiredCommand";
import { CiredActionEntree, CiredActionSystem, CiredAddressEntree, CiredArea, CiredCommandType } from "src/entities/cired/describe";
import { Coordinator } from "../../entities/Coordinator";
//import { CiredActionEntree, CiredCommandAction, CiredCommandEntree, CiredCommandType } from "../../entities/cired/CiredCommandEntree";

class CiredCommandService {

    public scanDeviceCiredByAddress<T>(coordinator: Coordinator, area: CiredArea, address: CiredAddressEntree, type: CiredCommandType) {


    }





}

export const ciredCommandService: CiredCommandService = new CiredCommandService();