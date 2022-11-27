import { BadRequestException, NotFoundException, NotAllowedException, NotAuthorizedException, CodeException } from './HttpException'

export enum RequestCodeException {


}

export class RequestException extends NotAllowedException {

    static readonly methodNotAllowed: CodeException = { errorCode: 'REQUEST_100' };
    static readonly invalid: CodeException = { errorCode: 'REQUEST_101' };

    constructor(code: CodeException, message: string = "Request method not allowed error") {
        super(code, message);
    }
}

export class RequestAuthorizationException extends NotAuthorizedException {

    static readonly basicAuthUsername: CodeException = { errorCode: 'REQUEST_001' };
    static readonly basicAuthPassword: CodeException = { errorCode: 'REQUEST_002' };

    static readonly bearerToken: CodeException = { errorCode: 'REQUEST_003' };


    constructor(code: CodeException, message: string = "Request basic auth error") {
        super(code, message);
    }
}
