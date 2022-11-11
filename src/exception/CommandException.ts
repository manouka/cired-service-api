/**
 * dépendances internes
 */
import { BadRequestException, NotFoundException } from './HttpException'

/**
 * 
 */
export enum CommandCodeException {
    notFound = 'COMMAND_001',
    unknownType = 'COMMAND_101',
}

/**
 * 
 */
export class CommandTypeException extends BadRequestException {
    constructor(code: CommandCodeException, message: string = "Command type error") {
        super(code, message);
    }
}

/**
 * 
 */
export class CommandNotFoundException extends NotFoundException {
    constructor(code: CommandCodeException, message: string = "Command not found") {
        super(code, message);
    }
}