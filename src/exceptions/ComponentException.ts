import { BadRequestException, CodeException } from './HttpException'

export class ComponentException extends BadRequestException {

    static readonly generic: CodeException = { errorCode : 'COMPONENT_001' };
    static readonly badType: CodeException = { errorCode : 'COMPONENT_002' };

    constructor(code: CodeException = ComponentException.generic, message: string = "Component error") {
        super(code, message);
    }
}