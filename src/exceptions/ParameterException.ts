import { BadRequestException, CodeException } from './HttpException'

export class ParameterException extends BadRequestException {

    static readonly badParameter: CodeException = { errorCode : 'PARAM_001' };
    static readonly missingParameter: CodeException = { errorCode : 'PARAM_010' };
    static readonly validator: CodeException = { errorCode : 'PARAM_020' };

    constructor(code: CodeException = ParameterException.badParameter, message: string = 'Bad parameter') {
        super(code, message);
    }
}
