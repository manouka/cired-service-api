/**
 * dépendances internes
 */
import { BadRequestException, MethodNotAllowedException, NotFoundException } from './HttpException'

/**
 * 
 */
export enum ElementCodeException {
    notFound = 'ELEMENT_001',

    unknownType = 'ELEMENT_101',
    badType = 'ELEMENT_102',
}

/**
 * 
 */
export class ElementTypeException extends BadRequestException {
    constructor(code: ElementCodeException, message: string = "Element type error") {
        super(code, message);
    }
}

/**
 * 
 */
export class ElementNotAllowedException extends MethodNotAllowedException {
    constructor(code: ElementCodeException, message: string = "Element not allowed error") {
        super(code, message);
    }
}

/**
 * 
 */
export class ElementNotFoundException extends NotFoundException {
    constructor(code: ElementCodeException, message: string = "Element not found") {
        super(code, message);
    }
}