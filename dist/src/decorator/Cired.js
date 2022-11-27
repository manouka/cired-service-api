"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsFlagTimer = exports.IsFlagState = exports.IsFlagIndex = exports.IsActionEntree = exports.IsAddressEntree = exports.IsArea = void 0;
const Validator_1 = require("../tool/Validator");
const exceptions_1 = require("../exceptions");
const CiredEntreeTool_1 = require("../tool/cired/CiredEntreeTool");
const CiredTool_1 = require("../tool/cired/CiredTool");
const IsArea = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredTool_1.CiredArea)) {
            throw new exceptions_1.CiredAddressException(exceptions_1.CiredAddressException.areaNotAllowed, `Cired area ${newValue} is not allowed`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsArea = IsArea;
const IsAddressEntree = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueRangedAllowed)(newValue, CiredEntreeTool_1.CiredAddressEntree.min, CiredEntreeTool_1.CiredAddressEntree.max)) {
            throw new exceptions_1.CiredAddressException(exceptions_1.CiredAddressException.addressNotAllowed, `Cired address entree ${newValue} is not allowed`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsAddressEntree = IsAddressEntree;
const IsActionEntree = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredEntreeTool_1.CiredActionEntree)) {
            throw new exceptions_1.CiredCommandException(exceptions_1.CiredCommandException.commandEntreeNotAllowed, `Command entree ${newValue} is not allowed`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsActionEntree = IsActionEntree;
const IsFlagIndex = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredEntreeTool_1.CiredFlagIndex)) {
            throw new exceptions_1.CiredFlagException(exceptions_1.CiredFlagException.flagIndexNotAllowed, `Flag index ${newValue} is not allowed`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsFlagIndex = IsFlagIndex;
const IsFlagState = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueAllowed)(newValue, CiredEntreeTool_1.CiredFlagState)) {
            throw new exceptions_1.CiredFlagException(exceptions_1.CiredFlagException.flagStateNotAllowed, `Flag state ${newValue} is not allowed`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsFlagState = IsFlagState;
const IsFlagTimer = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (!(0, Validator_1.IsValueRangedAllowed)(newValue, CiredEntreeTool_1.CiredFlagTimer.min, CiredEntreeTool_1.CiredFlagTimer.max)) {
            throw new exceptions_1.CiredFlagException(exceptions_1.CiredFlagException.flagTimerNotAllowed, `Flag timer ${newValue} is not allowed`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsFlagTimer = IsFlagTimer;
//# sourceMappingURL=Cired.js.map