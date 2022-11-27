import { BadRequestException, CodeException } from './HttpException'

export class CoordinatorException extends BadRequestException {

    static readonly generic: CodeException = { errorCode : 'COORDINATOR_001' };
    static readonly notFound: CodeException = { errorCode : 'COORDINATOR_010' };
    static readonly alreadyExist: CodeException = { errorCode : 'COORDINATOR_011' }
    
    static readonly noReply: CodeException = { errorCode : 'COORDINATOR_020' }

    constructor(code: CodeException = CoordinatorException.generic, message: string = "COORDINATOR error") {
        super(code, message);
    }
}