import { DecoratorCodeException, DecoratorException } from "../exception/DecoratorException";

export const IsPropertyValueAllowedDecorator = <T>(valuesAllowed: T): PropertyDecorator => <T>(target: T, propertyKey: keyof T): void => {

    let value: string;

    const getter = function () {

        return value;
    };

    const setter = function <T>(value: T) {
 

        
        if (!Object.values(valuesAllowed).includes(value)) {


            throw new DecoratorException(DecoratorCodeException.unknownType, `Value ${value} not allowed in ${JSON.stringify(valuesAllowed)}`);
        }
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}
