

export const IsCiredValuePropertyAllowed = <T>(valuesAllowed: T ): PropertyDecorator => (target: Object, propertyKey: string): void => {
  let value: unknown;
  const getter = () => {

    return value;
  };

  const setter = <T>(newValue: T) => {

    // si il y a une metdata, c'est que la valeur est valide dans le contexte
    if (Object.values(valuesAllowed).includes(newValue)) {


      Reflect.defineMetadata(`${propertyKey}`, newValue, target.constructor);
    }
 
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

export const IsCiredValuePropertyRangedAllowed = (min: number, max: number): PropertyDecorator => (target: Object, propertyKey: string): void => {
  let value: unknown;
  const getter = () => {

    return value;
  };

  const setter = (newValue: number) => {

    // si il y a une metdata, c'est que la valeur est valide dans le contexte
    if (newValue >= min && newValue <= max) {
      Reflect.defineMetadata(`${propertyKey}`, newValue, target.constructor);
    }
 
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

export const isCiredFlagNeed = (): PropertyDecorator => (target: Object, propertyKey: string): void => {
  let value: unknown;
  
  const getter = () => {

    return value;
  };

  const setter = <T>(newValue: T) => {

 
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

export const sealed = (): ClassDecorator => (target: Object): void  => {
  console.log('class decorator');
}
export const Test = (): PropertyDecorator => (target: Object, propertyKey: string): void  => {
  console.log('Test');
}

