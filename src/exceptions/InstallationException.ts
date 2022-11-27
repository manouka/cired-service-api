import { BadRequestException, CodeException } from './HttpException'

export class InstallationException extends BadRequestException {

    static readonly generic: CodeException = { errorCode : 'INSTALLATION_001' };
    static readonly notFound: CodeException = { errorCode : 'INSTALLATION_010' };
    static readonly alreadyExist: CodeException = { errorCode : 'INSTALLATION_011' }
    ;
    constructor(code: CodeException = InstallationException.generic, message: string = "Installation error") {
        super(code, message);
    }
}