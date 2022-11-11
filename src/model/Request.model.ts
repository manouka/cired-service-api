import { validate } from "class-validator";

/**
 * Méthode autorisé pour les requetes
 */
export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
}

/*export class Request {
    public device: DeviceAbstract;
    public headers: object = {};
    public method: RequestMethod = RequestMethod.GET;
    public path: string;
    public proxy: string;
    public payload: RequestPayload = new RequestPayload();
    public description: any = new RequestPayload();
}

export class RequestPayload {
    public param: any = {};
    public query: any = {};
    public body: any = {};
}
*/
export enum RequestAuthorizationType {
    noAuth = '',
    baseAuth = 'Basic Auth',
    bearerToken = 'Bearer'
}

export class RequestAuthorization {

    public type: RequestAuthorizationType = RequestAuthorizationType.noAuth;
    public username?: string;
    public password?: string;
    public bearerToken?: string;

    /**
     * 
     */
     public async validate() {

        await validate(this);
    }
}
