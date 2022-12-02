/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const QUERY_PARAM = 'queryParam';

export function QueryParam(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  const existingQueryParamsParameters: number[] = Reflect.getOwnMetadata(QUERY_PARAM, target, propertyKey) || [];
  existingQueryParamsParameters.push(parameterIndex);
  Reflect.defineMetadata(QUERY_PARAM, existingQueryParamsParameters, target, propertyKey);
}

export function applyQueryParams(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value!;

  descriptor.value = function () {
    const queryParamsParameters: number[] = Reflect.getOwnMetadata(QUERY_PARAM, target, propertyName);
    if (queryParamsParameters) {
      console.log('i am here');
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const { params } = arguments[0];
      for (const parameterIndex of queryParamsParameters) {
        arguments[parameterIndex] = Object.values(params)[0];
      }
    }

    return method.apply(this, arguments);
  };
}
