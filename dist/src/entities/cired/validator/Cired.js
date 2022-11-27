"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsState = exports.IsFlagIndex = exports.IsAction = exports.IsType = exports.IsAddress = exports.IsArea = void 0;
const Validator_1 = require("../../../tool/Validator");
const CiredCommand_1 = require("../CiredCommand");
const exceptions_1 = require("../../../exceptions");
const CiredCommandEntree_1 = require("../CiredCommandEntree");
const CiredCommandSortie_1 = require("../CiredCommandSortie");
const IsArea = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredCommand_1.CiredArea)) {
            throw new exceptions_1.CiredAddressException(exceptions_1.CiredAddressException.areaNotAllowed, `Cired area ${newValue} is not allowed`);
        }
        Reflect.defineMetadata('cired:area', newValue, target.constructor);
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsArea = IsArea;
const IsAddress = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        let type = getCiredCommandType(target, propertyKey);
        let addressRange = type == CiredCommand_1.CiredCommandType.entree ? CiredCommandEntree_1.CiredAddressEntreeRange : type == CiredCommand_1.CiredCommandType.sortie ? CiredCommandSortie_1.CiredAddressSortieRange : [];
        if (!addressRange.includes(newValue)) {
            throw new exceptions_1.CiredAddressException(exceptions_1.CiredAddressException.addressNotAllowed, `Cired address ${newValue} is not allowed`);
        }
        Reflect.defineMetadata('cired:address', newValue, target.constructor);
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsAddress = IsAddress;
const IsType = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredCommand_1.CiredCommandType)) {
            throw new exceptions_1.CiredTypeException(exceptions_1.CiredTypeException.notAllowed, `Cired type ${newValue} is not allowed`);
        }
        Reflect.defineMetadata('cired:type', newValue, target.constructor);
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsType = IsType;
const IsAction = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        let type = getCiredCommandType(target, propertyKey);
        let actionAllowed = type == CiredCommand_1.CiredCommandType.entree ? CiredCommandEntree_1.CiredActionEntree : type == CiredCommand_1.CiredCommandType.sortie ? CiredCommandSortie_1.CiredActionSortie : [];
        if (!(0, Validator_1.IsValueAllowed)(newValue, actionAllowed)) {
            throw new exceptions_1.CiredActionException(exceptions_1.CiredActionException.notAllowed, `Cired command ${newValue} is not allowed for command type ${type}`);
        }
        Reflect.defineMetadata('cired:action', newValue, target.constructor);
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsAction = IsAction;
const IsFlagIndex = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        getCiredCommandType(target, propertyKey);
        let action = getCiredAction(target, propertyKey);
        checkActionArguments(action, propertyKey);
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredCommandEntree_1.CiredFlagIndex)) {
            throw new exceptions_1.CiredFlagException(exceptions_1.CiredFlagException.flagIndexNotAllowed, `Flag index ${newValue} is not allowed`);
        }
        Reflect.defineMetadata('cired:flag', newValue, target.constructor);
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsFlagIndex = IsFlagIndex;
const IsState = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        getCiredCommandType(target, propertyKey);
        let action = getCiredAction(target, propertyKey);
        console.log(action);
        checkActionArguments(action, propertyKey);
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredCommand_1.CiredState)) {
            throw new exceptions_1.CiredFlagException(exceptions_1.CiredFlagException.flagStateNotAllowed, `State ${newValue} is not allowed`);
        }
        Reflect.defineMetadata('cired:etat', newValue, target.constructor);
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsState = IsState;
const getCiredCommandType = (target, propertyKey) => {
    if (!Reflect.hasMetadata('cired:type', target.constructor)) {
        throw new exceptions_1.CiredTypeException(exceptions_1.CiredTypeException.notDefined, `Cired type is not defined`);
    }
    return Reflect.getMetadata('cired:type', target.constructor);
};
const getCiredAction = (target, propertyKey) => {
    if (!Reflect.hasMetadata('cired:action', target.constructor)) {
        throw new exceptions_1.CiredActionException(exceptions_1.CiredActionException.notDefined, `Cired action is not defined`);
    }
    return Reflect.getMetadata('cired:action', target.constructor);
};
const getFlagIndex = (target, propertyKey) => {
    console.log(CiredCommand_1.ciredActionDescriptor);
};
const checkActionArguments = (action, propertyKey) => {
    if (!CiredCommand_1.ciredActionDescriptor.has(action)) {
        throw new exceptions_1.CiredActionException(exceptions_1.CiredActionException.notDescribed, `Action ${action} not described`);
    }
    let actionDescribes = CiredCommand_1.ciredActionDescriptor.get(action);
    if (!actionDescribes.includes(propertyKey)) {
        throw new exceptions_1.CiredActionException(exceptions_1.CiredActionException.argumentNotAllowed, `Argument not allowed for action ${action}`);
    }
};
//# sourceMappingURL=Cired.js.map