
/**
 * dépendances externes
 */
import { AxiosResponse } from "axios";
import { Coordinator, CoordinatorInterface } from "../../entities/Coordinator";
import { Request, RequestMethod } from "../../entities/Request";
import * as xml2js from 'xml2js';
import { requestService } from "../request/RequestService";
import { ComponentType } from "../../models/database/ComponentModel";
import { CiredCommand } from "../../entities/cired/CiredCommand";
import { CiredActionEntree, CiredActionSystem, CiredAddress, CiredAddressRange, CiredAddressScanRange, CiredArea, CiredCommandType } from "../../entities/cired/describe";
import { CiredResponse } from "src/entities/cired/CiredResponse";


//import { CiredCommandAbtsract } from "../../entities/cired/CiredCommandEntree";

/**
 * Dépendances internes
 */

/**
 * 
 */
class CiredCoordinatorService {

    protected readonly retryCount: number = 5;

    protected readonly requestPath: string = '/requete.xml';
    protected readonly infoPath: string = '/info.xml';

    private xmlParser;

    public constructor() {
        this.xmlParser = new xml2js.Parser({ explicitArray: false });
    }

    public async requestInformation(coordinator: Coordinator): Promise<Coordinator> {

        /**
         * préparation de l'entité de requete
         */
        let request: Request = new Request();
        request.host = coordinator.host;
        request.port = coordinator.port;
        request.method = RequestMethod.GET;
        request.path = this.infoPath;
        request.authorization = coordinator.authorization;


        let requestResponse: AxiosResponse = <AxiosResponse>await requestService.send(request);
        if (requestResponse.status != 200) {

            return coordinator;
        }

        coordinator.externalInformation = await this.buildResponse(requestResponse.data);

        return coordinator;
    }

    /**
     * 
     * @param coordinator 
     * @param commandList 
     * @returns 
     */
    public async sendCommandList(coordinator: Coordinator, commandList: Array<CiredCommand>): Promise<CiredResponse[]> {

        let requestList: Request[] = [];
        for (let command of commandList) {
            /**
             * préparation de l'entité de requete
             */
            let request = new Request();
            request.host = coordinator.host;
            request.port = coordinator.port;
            request.method = RequestMethod.GET;
            request.path = this.requestPath;
            request.payload.query = command;

            requestList.push(request);
        }

        let requestResponseList: AxiosResponse[] = <AxiosResponse[]>await requestService.sendList(requestList);

        let responseCiredList: CiredResponse[] = [];
        for (let response of requestResponseList) {
            if (response.status != 200) {
                continue;
            }

            responseCiredList.push(await this.buildResponse(response.data));
        }

        return responseCiredList;
    }

    /**
     * 
     * @param coordinator 
     * @param command 
     * @returns 
     */
    public async sendCommand(coordinator: Coordinator, command: CiredCommand): Promise<CiredResponse> {

        /**
         * préparation de l'entité de requete
         */
        let request = new Request();
        request.authorization = coordinator.authorization;
        request.host = coordinator.host;
        request.port = coordinator.port;
        request.method = RequestMethod.GET;
        request.path = this.requestPath;
        request.payload.query = command;

        let requestResponse: AxiosResponse
    
        for (let i = 0 ; i < this.retryCount ; i++) {
            try {
                requestResponse = <AxiosResponse>await requestService.send(request);
            } catch (error) {
            }   

            if (requestResponse && requestResponse.status == 200) {
    
                return await this.buildResponse(requestResponse.data);
            }
        }

        return await this.buildResponse(); 
    }

    private async buildRequest(coordinator: Coordinator) {

    }

    /**
        * Parse et build d'une reponse cired
        *
        * @param ciredResponse 
        */
    private async buildResponse(ciredResponse: string = ''): Promise<CiredResponse> {

        let responseBuilt: CiredResponse;
        if (ciredResponse == '') {
            responseBuilt = await this.xmlParser.parseStringPromise('<cired></cired>');

            return responseBuilt;
        }

        let responseParsed = await this.xmlParser.parseStringPromise(ciredResponse);

        if (responseParsed.cired) {
            responseBuilt = responseParsed.cired;
        }
        responseBuilt.updatedAt = Date.now();

        return responseBuilt;
    }

}

export const ciredCoordinatorService: CiredCoordinatorService = new CiredCoordinatorService();

