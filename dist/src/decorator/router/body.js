"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyBody = exports.Body = void 0;
const BODY = 'body';
function Body(target, propertyKey, parameterIndex) {
    const existingQueryParamsParameters = Reflect.getOwnMetadata(BODY, target, propertyKey) || [];
    existingQueryParamsParameters.push(parameterIndex);
    Reflect.defineMetadata(BODY, existingQueryParamsParameters, target, propertyKey);
}
exports.Body = Body;
function applyBody(target, propertyName, descriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
        const queryParamsParameters = Reflect.getOwnMetadata(BODY, target, propertyName);
        if (queryParamsParameters) {
            const { body } = arguments[0];
            for (const parameterIndex of queryParamsParameters) {
                arguments[parameterIndex] = Object.values(body);
            }
        }
        return method.apply(this, arguments);
    };
}
exports.applyBody = applyBody;
//# sourceMappingURL=body.js.map