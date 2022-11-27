import { IsValueAllowed, IsValueRangedAllowed } from "../../tool/Validator";

import { CiredAddressException, CiredActionException, CiredTypeException, CiredFlagException, CiredStateException, CiredTimerException, CiredRelayException } from "../../exceptions";
import { CiredAction, ciredActionDescriptor, CiredAddress, CiredAddressRange, CiredArea, CiredCommandType, CiredState, CiredAddressEntreeRange, CiredFlag, CiredRelay, CiredAddressSortieRange, CiredActionEntree, CiredActionSortie } from "./describe";
import { CiredCommand } from "./CiredCommand";


/**
 * 
 * @param target 
 * @param propertyKey 
 */
/*export const IsArea = (target: Object, propertyKey: string): void => {
    let value: unknown;
    const getter = () => {

        return value;
    };

    const setter = (newValue: number) => {


        if (!IsValueAllowed(newValue, CiredArea)) {

            throw new CiredAddressException(CiredAddressException.areaNotAllowed, `Cired area ${newValue} is not allowed`)
        }

        Reflect.defineMetadata('cired:area', newValue, target.constructor);
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

/**
 * 
 * @param target 
 * @param propertyKey 
 */
/*export const IsAddress = (target: Object, propertyKey: string): void => {
    let value: unknown;

    const getter = () => {

        return value;
    };

    const setter = (newValue: CiredAddress) => {
        let type: CiredCommandType = getCiredCommandType(target, propertyKey);

        let addressRange: Array<number> = type == CiredCommandType.entree ? CiredAddressEntreeRange : type == CiredCommandType.sortie ? CiredAddressSortieRange : [];
        if (!addressRange.includes(newValue)) {

            throw new CiredAddressException(CiredAddressException.addressNotAllowed, `Cired address ${newValue} is not allowed`)
        }

        Reflect.defineMetadata('cired:address', newValue, target.constructor);
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}


/**
 * 
 * @param target 
 * @param propertyKey 
 */
/*export const IsType = (target: Object, propertyKey: string): void => {
    let value: unknown;

    const getter = () => {

        return value;
    };

    const setter = (newValue: number) => {


        if (!IsValueAllowed(newValue, CiredCommandType)) {

            throw new CiredTypeException(CiredTypeException.notAllowed, `Cired type ${newValue} is not allowed`)
        }

        Reflect.defineMetadata('cired:type', newValue, target.constructor);
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

/**
 * 
 * @param target 
 * @param propertyKey 
 */
/*export const IsAction = (target: Object, propertyKey: string): void => {
    let value: unknown;

    const getter = () => {

        return value;
    };

    const setter = (newValue: CiredAction) => {

        // check l'adresse en fonction du type
        let type: CiredCommandType = getCiredCommandType(target, propertyKey);

        let actionAllowed: any = type == CiredCommandType.entree ? CiredActionEntree : type == CiredCommandType.sortie ? CiredActionSortie : [];
        if (!IsValueAllowed(newValue, actionAllowed)) {

            throw new CiredActionException(CiredActionException.notAllowed, `Cired command ${newValue} is not allowed for command type ${ type }`)
        }

        Reflect.defineMetadata('cired:action', newValue, target.constructor);

        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

export const IsFlag = (target: Object, propertyKey: string): void => {
    let value: unknown;

    const getter = () => {

        return value;
    };

    const setter = (newValue: any) => {


        getCiredCommandType(target, propertyKey)

        let action: CiredAction = getCiredAction(target, propertyKey)
        checkActionArguments(action, propertyKey);

        if (!IsValueAllowed(newValue, CiredFlag)) {

            throw new CiredFlagException(CiredFlagException.notAllowed, `Flag ${newValue} is not allowed`)
        }

        Reflect.defineMetadata('cired:flag', newValue, target.constructor);

        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

export const IsRelay = (target: Object, propertyKey: string): void => {
    let value: unknown;

    const getter = () => {

        return value;
    };

    const setter = (newValue: any) => {


        getCiredCommandType(target, propertyKey)

        let action: CiredAction = getCiredAction(target, propertyKey)
        checkActionArguments(action, propertyKey);

        if (!IsValueAllowed(newValue, CiredRelay)) {

            throw new CiredRelayException(CiredRelayException.notAllowed, `Relay ${newValue} is not allowed`)
        }

        Reflect.defineMetadata('cired:relais', newValue, target.constructor);

        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

export const IsState = (target: Object, propertyKey: string): void => {
    let value: unknown;

    const getter = () => {

        return value;
    };

    const setter = (newValue: any) => {

        getCiredCommandType(target, propertyKey)
        
        let action: CiredAction = getCiredAction(target, propertyKey)
        checkActionArguments(action, propertyKey);

        if (!IsValueAllowed(newValue, CiredState)) {

            throw new CiredStateException(CiredStateException.notAllowed, `State ${newValue} is not allowed`)
        }

        Reflect.defineMetadata('cired:etat', newValue, target.constructor);

        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

export const IsTimer = (target: Object, propertyKey: string): void => {
    let value: unknown;

    const getter = () => {

        return value;
    };

    const setter = (newValue: any) => {

        getCiredCommandType(target, propertyKey)
        
        let action: CiredAction = getCiredAction(target, propertyKey)
        checkActionArguments(action, propertyKey);

        if (!IsValueAllowed(newValue, CiredState)) {

            throw new CiredTimerException(CiredTimerException.notAllowed, `Timer ${newValue} is not allowed`)
        }

        Reflect.defineMetadata('cired:etat', newValue, target.constructor);

        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

const getCiredCommandType = (target: Object, propertyKey: string): CiredCommandType => {
    if (!Reflect.hasMetadata('cired:type', target.constructor)) {

        throw new CiredTypeException(CiredTypeException.notDefined, `Cired type is not defined`)
    }   

    return Reflect.getMetadata('cired:type', target.constructor);
}

const getCiredAction = (target: Object, propertyKey: string) => {
    if (!Reflect.hasMetadata('cired:action', target.constructor)) {

        throw new CiredActionException(CiredActionException.notDefined, `Cired action is not defined`)
    }  
    
    return Reflect.getMetadata('cired:action', target.constructor);
}

const getState = (target: Object, propertyKey: string) => {
    if (!Reflect.hasMetadata('cired:state', target.constructor)) {

        throw new CiredStateException(CiredStateException.notDefined, `Cired state is not defined`)
    }  
    
    return Reflect.getMetadata('cired:action', target.constructor);
}


const checkActionArguments = (action: CiredAction, propertyKey: string, ) => {
    if (!ciredActionDescriptor.has(action)) {
            
        throw new CiredActionException(CiredActionException.notDescribed, `Action ${action} not described`)
    }

    let actionDescribes: Array<string> = ciredActionDescriptor.get(action);
    if (!actionDescribes.includes(propertyKey)) {
            
        throw new CiredActionException(CiredActionException.argumentNotAllowed, `Argument not allowed for action ${action}`)
    }
}*/

export const valideCiredCommand = (command: CiredCommand) => {
    CiredCommandValidator.type(command);
    CiredCommandValidator.address(command);
    CiredCommandValidator.cmd(command);
    CiredCommandValidator.flag(command);
    CiredCommandValidator.relais(command);
    CiredCommandValidator.etat(command);
}


export class CiredCommandValidator {




    public static address(command: CiredCommand) {
        let addressRange: Array<number> = command.getType() == CiredCommandType.entree ? CiredAddressEntreeRange : command.getType() == CiredCommandType.sortie ? CiredAddressSortieRange : [];
        if (!addressRange.includes(command.getAddress())) {

            throw new CiredAddressException(CiredAddressException.addressNotAllowed, `Cired address ${command.getAddress()} is not allowed`)
        }
    }

    public static type(command: CiredCommand) {

        if (!IsValueAllowed(command.getType(), CiredCommandType)) {

            throw new CiredTypeException(CiredTypeException.notAllowed, `Cired type ${command.getType()} is not allowed`)
        }

    }

    public static cmd(command: CiredCommand) {

        CiredCommandValidator.type(command);

        let actionAllowed: any = command.getType() == CiredCommandType.entree ? CiredActionEntree : command.getType() == CiredCommandType.sortie ? CiredActionSortie : [];
        if (!IsValueAllowed(command.getAction(), actionAllowed)) {

            throw new CiredActionException(CiredActionException.notAllowed, `Cired command ${command.getAction()} is not allowed for command type ${command.getType()}`)
        }
    }

    public static flag(command: CiredCommand) {

        if (!command.flag) {
            return;
        }

        CiredCommandValidator.type(command);
        CiredCommandValidator.cmd(command);

        CiredCommandValidator.checkActionArgument(command, 'flag');

        if (!IsValueAllowed(command.flag, CiredFlag)) {

            throw new CiredFlagException(CiredFlagException.notAllowed, `Flag ${command.flag} is not allowed`)
        }
    }

    public static etat(command: CiredCommand) {

        if (!command.etat) {
            return;
        }

        CiredCommandValidator.type(command);
        CiredCommandValidator.cmd(command);
        CiredCommandValidator.checkActionArgument(command, 'etat');

        if (!IsValueAllowed(command.etat, CiredState)) {

            throw new CiredStateException(CiredStateException.notAllowed, `State ${command.etat} is not allowed`)
        }
    }

    public static relais(command: CiredCommand) {

        if (!command.relais) {
            return;
        }

        CiredCommandValidator.type(command);
        CiredCommandValidator.cmd(command);

        CiredCommandValidator.checkActionArgument(command, 'relais');

        if (!IsValueAllowed(command.relais, CiredFlag)) {

            throw new CiredRelayException(CiredRelayException.notAllowed, `Relay ${command.relais} is not allowed`)
        }
    }

    private static checkActionArgument(command: CiredCommand, argument: string) {
        if (!ciredActionDescriptor.has(command.getAction())) {

            throw new CiredActionException(CiredActionException.notDescribed, `Action ${command.getAction()} not described`)
        }

        let actionDescribes: Array<string> = ciredActionDescriptor.get(command.getAction());
        if (!actionDescribes.includes(argument)) {

            throw new CiredActionException(CiredActionException.argumentNotAllowed, `Argument ${argument} not allowed for action ${command.getAction()}`)
        }
    }


}
