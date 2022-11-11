import { BadRequestException, NotFoundException } from './HttpException'

export enum MacroCodeException {
    notFound = 'MACRO_001',
    unknownType = 'MACRO_101',
}


export class MacroTypeException extends BadRequestException {
    constructor(code: MacroCodeException, message: string = "Macro type error") {
        super(code, message);
    }
}

export class MacroNotFoundException extends NotFoundException {
    constructor(code: MacroCodeException, message: string = "Macro not found") {
        super(code, message);
    }
}