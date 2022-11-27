/**
 * dépendances internes
 */
import { RequestAuthorizationException } from "../../exceptions";
import { RequestAuthorization, RequestAuthorizationType } from "../../entities/Request";

/**
 * 
 */
export class RequestAuthorizationService {

    /**
     * 
     * @param authorization 
     */
    public getHeaderAuthorization(authorization: RequestAuthorization): string {

        if (!authorization) {
            return null;

        }

        switch (authorization.type) {
            case RequestAuthorizationType.baseAuth:
                return this.getAutorizationBasicAuth(authorization)

            case RequestAuthorizationType.bearerToken:
                return this.getAutorizationBearer(authorization)
        }

    }

    /**
     * @param authorization 
     */
    public getAutorizationBasicAuth(authorization: RequestAuthorization): string {

        if (!authorization.username) {
            throw new RequestAuthorizationException(RequestAuthorizationException.basicAuthUsername, 'Basic Auth : Miss username or can\'t be null.')
        }

        if (!authorization.password) {
            throw new RequestAuthorizationException(RequestAuthorizationException.basicAuthPassword, 'Basic Auth : Miss password or can\'t be null.')
        }

        return `Basic ${Buffer.from(`${authorization.username}:${authorization.password}`).toString('base64')}`;
    }

    /**
     * @param authorization 
     */
     public getAutorizationBearer(authorization: RequestAuthorization): string {

        if (!authorization.bearerToken) {
            throw new RequestAuthorizationException(RequestAuthorizationException.bearerToken, 'Bearer Token : Miss token or can\'t be null.')
        }
        return `Bearer ${authorization.bearerToken}`;
    }
}

/**
 * Instances du service
 */
export const requestAuthorizationService: RequestAuthorizationService = new RequestAuthorizationService();