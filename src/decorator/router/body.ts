/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const BODY = 'body';

export function Body(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  const existingQueryParamsParameters: number[] = Reflect.getOwnMetadata(BODY, target, propertyKey) || [];
  existingQueryParamsParameters.push(parameterIndex);
  Reflect.defineMetadata(BODY, existingQueryParamsParameters, target, propertyKey);
}

export function applyBody(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value!;

  descriptor.value = function () {
    const queryParamsParameters: number[] = Reflect.getOwnMetadata(BODY, target, propertyName);
    if (queryParamsParameters) {
      const { body } = arguments[0];
      for (const parameterIndex of queryParamsParameters) {
        arguments[parameterIndex] = Object.values(body);
      }
    }
    return method.apply(this, arguments);
  };
}
