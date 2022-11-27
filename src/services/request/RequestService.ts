/**
 * Dépenances externes 
 */

/**
 * dépendances internes
 */
import { RequestException } from "../../exceptions";
import { Request, RequestAuthorization, RequestMethod } from "../../entities/Request";
import { requestAuthorizationService } from "./RequestAuthorizationService";
import axios, { AxiosResponse } from "axios";
import { ParsedUrlQueryInput, stringify } from "querystring";


/**
 * 
 */
export class RequestService {


    /**
     * 
     * @param request 
     */
    public async send(request: Request): Promise<AxiosResponse> {

        return await this.getPromiseRequest(request);
    }

    /**
     * 
     * @param requestEntity 
     */
    public async sendList(requestEntities: Array<Request>): Promise<AxiosResponse[]> {

        let requestPromiseList: any = [];

        /**
         * préparation des promesses
         */
        for (let request of requestEntities) {
            requestPromiseList.push(this.getPromiseRequest(request));
        }

        return await axios.all(requestPromiseList)
    }

    /**
     * Retourne une promesse de requete
     * 
     * @param request 
     */
    private getPromiseRequest(request: Request): Promise<AxiosResponse> {
        let authorization: RequestAuthorization = request.authorization;
        let autorizationHeader: string = requestAuthorizationService.getHeaderAuthorization(authorization);

        if (autorizationHeader) {

            Object.assign(request.headers, { Authorization: autorizationHeader });
        }

        if (!Object.values(RequestMethod).includes(request.method)) {

            throw new RequestException(RequestException.methodNotAllowed, `Request method ${request.method} not allowed.`);
        }

        
        let query = request.payload && request.payload.query ? stringify(<ParsedUrlQueryInput>request.payload.query) : '';
        let path: string = `${ request.host }${ request.port ? `:${request.port}` : '' }${ request.path }?${ query }`;

        var config = {
            method: request.method,
            url: path,
            headers: request.headers,
            data: request.payload && request.payload.body ? request.payload.body : '',
            timeout: 500,
        };

        return axios(config);

        if (request.method == RequestMethod.GET) {
            return axios.get(path, { headers: request.headers, timeout: 500 });
        }

        if (request.method == RequestMethod.POST) {
            
            //return axios.post(path, { data : 'ON' }, { headers: request.headers, timeout: 500 });
        }
    }
}

/**
 * Instances des services
 */
export const requestService: RequestService = new RequestService();


