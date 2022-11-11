/**
 * dépendances internes
 */
import { BadRequestException } from './HttpException'

/**
 * 
 */
export enum DecoratorCodeException {
    unknownType = 'DECORATOR_900',  
}

/**
 * 
 */
export class DecoratorException extends BadRequestException {
    constructor(code: DecoratorCodeException, message: string = "Decorator error") {
        super(code, message);
    }
}
