"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.sealed = exports.isCiredFlagNeed = exports.IsCiredValuePropertyRangedAllowed = exports.IsCiredValuePropertyAllowed = void 0;
const IsCiredValuePropertyAllowed = (valuesAllowed) => (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (Object.values(valuesAllowed).includes(newValue)) {
            Reflect.defineMetadata(`${propertyKey}`, newValue, target.constructor);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsCiredValuePropertyAllowed = IsCiredValuePropertyAllowed;
const IsCiredValuePropertyRangedAllowed = (min, max) => (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        if (newValue >= min && newValue <= max) {
            Reflect.defineMetadata(`${propertyKey}`, newValue, target.constructor);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsCiredValuePropertyRangedAllowed = IsCiredValuePropertyRangedAllowed;
const isCiredFlagNeed = () => (target, propertyKey) => {
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.isCiredFlagNeed = isCiredFlagNeed;
const sealed = () => (target) => {
    console.log('class decorator');
};
exports.sealed = sealed;
const Test = () => (target, propertyKey) => {
    console.log('Test');
};
exports.Test = Test;
//# sourceMappingURL=CiredDecorator.js.map