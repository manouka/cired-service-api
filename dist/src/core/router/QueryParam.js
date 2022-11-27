"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyQueryParams = exports.QueryParam = void 0;
const QUERY_PARAM = 'queryParam';
function QueryParam(target, propertyKey, parameterIndex) {
    const existingQueryParamsParameters = Reflect.getOwnMetadata(QUERY_PARAM, target, propertyKey) || [];
    existingQueryParamsParameters.push(parameterIndex);
    Reflect.defineMetadata(QUERY_PARAM, existingQueryParamsParameters, target, propertyKey);
}
exports.QueryParam = QueryParam;
function applyQueryParams(target, propertyName, descriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
        const queryParamsParameters = Reflect.getOwnMetadata(QUERY_PARAM, target, propertyName);
        if (queryParamsParameters) {
            console.log('i am here');
            const { params } = arguments[0];
            for (const parameterIndex of queryParamsParameters) {
                arguments[parameterIndex] = Object.values(params)[0];
            }
        }
        console.log(arguments);
        return method.apply(this, arguments);
    };
}
exports.applyQueryParams = applyQueryParams;
//# sourceMappingURL=QueryParam.js.map