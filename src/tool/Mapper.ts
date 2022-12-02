import { validate } from 'class-validator';
import { ParameterException } from '../exceptions';

export const entityMapper = async <T>(entity: new () => T, json: any): Promise<T> => {
    let instance: any = new entity();
  
    Object.keys(json).forEach((key) => {
        instance[key] = json[key];
    });

    let errors = await validate(instance, { stopAtFirstError: true });
    if (errors.length > 0) {
        let message: string = Object.keys(errors[0].constraints).map((constraintIndex) => {
            return errors[0].constraints[constraintIndex]
        }).join(' - ');

        throw new ParameterException(ParameterException.validator, message);
    }

    return instance;
}

