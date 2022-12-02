"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyBody = exports.Body = void 0;
const BODY = 'body-index';
const BODY_VALUE = 'body-value';
const Body = (entity) => {
    return (target, propertyKey, parameterIndex) => {
        if (!Reflect.hasMetadata(BODY, target)) {
            Reflect.defineMetadata(BODY, parameterIndex, target, propertyKey);
            Reflect.defineMetadata(BODY_VALUE, new entity(), target, propertyKey);
        }
    };
};
exports.Body = Body;
function applyBody(target, propertyName, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        let originalMethod = descriptor.value;
        const parameterIndex = Reflect.getOwnMetadata(BODY, target, propertyName);
        if (parameterIndex) {
            const { body } = arguments[0];
            arguments[parameterIndex] = Object.values(body);
        }
        return method.apply(this, arguments);
    };
}
exports.applyBody = applyBody;
//# sourceMappingURL=Body.js.map