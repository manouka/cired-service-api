import { IsEnum, IsOptional, IsPort, IsString, IsUrl, validate } from "class-validator";
import { RequestAuthorizationException, RequestException } from "src/exceptions";

/**
 * Méthode autorisé pour les requetes
 */
export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
}

export class Request {

    @IsUrl()
    host: string;

    @IsPort()
    @IsOptional()
    port: number;

    @IsOptional()
    authorization: RequestAuthorization;
   
    headers: object = {};

    @IsEnum(RequestMethod)
    method: RequestMethod;

    @IsUrl()
    path: string;

    @IsOptional()
    proxy?: string;

    payload: RequestPayload;

    public constructor() {
        this.payload = new RequestPayload();
        this.authorization = new RequestAuthorization();
    }
}

export class RequestPayload {
    query?: any = {};
    body?: any = {};   
}

export enum RequestAuthorizationType {
    noAuth = '',
    baseAuth = 'Basic Auth',
    bearerToken = 'Bearer'
}

export class RequestAuthorization {

    @IsEnum(RequestAuthorizationType)
    @IsString()
    public type: RequestAuthorizationType;

    @IsString()
    @IsOptional()
    public username?: string;

    @IsString()
    @IsOptional()
    public password?: string;

    @IsString()
    @IsOptional()
    public bearerToken?: string;
}
