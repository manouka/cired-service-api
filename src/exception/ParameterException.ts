import { BadRequestException } from './HttpException'

export enum ParameterCodeException {
    badParameter = 'PARAM_001',   
    missingParameter = 'PARAM_100',

}

export class BadParameterException extends BadRequestException {
    constructor(code: ParameterCodeException, message: string = "Bad parameter") {
        super(code, message);
    }
}

export class MissingParameterException extends BadRequestException {
    constructor(code: ParameterCodeException, message: string = "Missing parameter") {
        super(code, message);
    }
}
