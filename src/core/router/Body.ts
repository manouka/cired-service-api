/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const BODY = 'body-index';
const BODY_VALUE = 'body-value';

/*export function Body<T>(target: T, propertyKey: string | symbol, parameterIndex: number) {
  const existingQueryParamsParameters: number[] = Reflect.getOwnMetadata(BODY, target, propertyKey) || [];
  existingQueryParamsParameters.push(parameterIndex);
  Reflect.defineMetadata(BODY, existingQueryParamsParameters, target, propertyKey);

  console.log(parameterIndex)
}*/

/*export const Body = <T>(entity: new () => T) => (target: any, propertyKey: string | symbol, parameterIndex: number): void => {
  //const existingQueryParamsParameters: number[] = Reflect.getOwnMetadata(BODY, target, propertyKey) || [];
//  existingQueryParamsParameters.push(parameterIndex);

  Reflect.defineMetadata(BODY, new entity(), target, propertyKey);
}*/

export const Body = <T>(entity: new () => T)  => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {

    if (!Reflect.hasMetadata(BODY, target)) {
      Reflect.defineMetadata(BODY, parameterIndex, target, propertyKey);
      Reflect.defineMetadata(BODY_VALUE, new entity(), target, propertyKey);
    }
  }
}



export function applyBody(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value!;

  descriptor.value = function (...args: any[]) {

    //console.log(args)
    //console.log(target[propertyName][0])

    let originalMethod = descriptor.value;

    const parameterIndex: number = Reflect.getOwnMetadata(BODY, target, propertyName);

    if (parameterIndex) {
      const { body } = arguments[0];

      arguments[parameterIndex] = Object.values(body);
    }
   // let result = originalMethod.apply(this, args);
    //const queryParamsParameters: number[] = Reflect.getOwnMetadata(BODY, target, propertyName);
 
    //let entity = Reflect.getOwnMetadata(BODY, target, propertyName);
   // entity.initialization(arguments[0].body)
    //console.log(method)
   // return method.apply(descriptor, entity);

   /* const { body } = arguments[0];
    

    if (queryParamsParameters) {
      const { body } = arguments[0];
      console.log(arguments[0].body)
      for (const parameterIndex of queryParamsParameters) {
        arguments[parameterIndex] = Object.values(body);
      }
    }*/

    return method.apply(this, arguments);
  };
}
