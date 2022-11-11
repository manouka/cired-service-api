"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPropertyValueAllowedDecorator = void 0;
const DecoratorException_1 = require("../exception/DecoratorException");
const IsPropertyValueAllowedDecorator = (valuesAllowed) => (target, propertyKey) => {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (value) {
        if (!Object.values(valuesAllowed).includes(value)) {
            throw new DecoratorException_1.DecoratorException(DecoratorException_1.DecoratorCodeException.unknownType, `Value ${value} not allowed in ${JSON.stringify(valuesAllowed)}`);
        }
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.IsPropertyValueAllowedDecorator = IsPropertyValueAllowedDecorator;
//# sourceMappingURL=GenericDecorator.js.map