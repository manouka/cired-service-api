/**
 * dépendances internes
 */
import { BadRequestException, NotFoundException } from './HttpException'

/**
 * 
 */
export enum OpenHabCodeException {

    badSwitchState = 'OPEN_HAB_001',

    notFound = 'OPEN_HAB_300',
}

/**
 * 
 */
export class OpenHabNotFoundException extends BadRequestException {
    constructor(code: OpenHabCodeException, message: string = "OpenHab") {
        super(code, message);
    }
}

/**
 * 
 */
 export class OpenHabBadSwitchStateFoundException extends BadRequestException {
    constructor(code: OpenHabCodeException, message: string = "OpenHab") {
        super(code, message);
    }
}
