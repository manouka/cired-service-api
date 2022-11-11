import { BadRequestException, NotFoundException, NotAllowedException, NotAuthorizedException } from './HttpException'

export enum RequestCodeException {
    basicAuthUsername = 'REQUEST_001',
    basicAuthPassword = 'REQUEST_002',

    bearerToken = 'REQUEST_003',

    methodNotAllowed = 'REQUEST_100',

}

export class RequestMethodNotAllowed extends NotAllowedException {
    constructor(code: RequestCodeException, message: string = "Request method not allowed error") {
        super(code, message);
    }
}

export class RequestBasicAuthException extends NotAuthorizedException {
    constructor(code: RequestCodeException, message: string = "Request basic auth error") {
        super(code, message);
    }
}
