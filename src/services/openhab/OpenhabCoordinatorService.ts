
/**
 * dépendances externes
 */
import { AxiosResponse } from "axios";
import { Coordinator, CoordinatorInterface } from "../../entities/Coordinator";
import { Request, RequestMethod } from "../../entities/Request";
import * as xml2js from 'xml2js';
import { requestService } from "../request/RequestService";
import { CoordinatorServiceInterface } from "../CoordinatorService";
import { entityMapper } from "../../tool/Mapper";
import { OpenHabItem } from "../../entities/openhab/OpenhabItem";


//import { CiredCommandAbtsract } from "../../entities/cired/CiredCommandEntree";

/**
 * Dépendances internes
 */

/**
 * 
 */
class OpenhabCoordinatorService implements CoordinatorServiceInterface {

    public readonly systeminfo: string = '/rest/systeminfo';
    public readonly items: string = '/rest/items';

    private xmlParser;

    public constructor() {
        this.xmlParser = new xml2js.Parser({ explicitArray: false });
    }

    public async getInformation(coordinator: Coordinator): Promise<Coordinator> {

        /**
         * préparation de l'entité de requete
         */
        let request: Request = new Request();
        request.host = coordinator.host;
        request.port = coordinator.port;
        request.method = RequestMethod.GET;
        request.path = this.systeminfo;
        request.authorization = coordinator.authorization;

        let requestResponse: AxiosResponse = <AxiosResponse>await requestService.send(request);
        if (requestResponse.status != 200) {

            return coordinator;
        }

        coordinator.externalInformation = requestResponse.data;

        return coordinator;
    }

    public async getAllItems(coordinator: Coordinator): Promise<Array<OpenHabItem>> {
        /**
         * préparation de l'entité de requete
         */
        let request: Request = new Request();
        request.host = coordinator.host;
        request.port = coordinator.port;
        request.method = RequestMethod.GET;
        request.path = this.items;
        request.authorization = coordinator.authorization;

        let requestResponse: AxiosResponse = <AxiosResponse>await requestService.send(request);
       
        if (requestResponse.status != 200) {

            return [];
        }

        let items: Array<OpenHabItem> = [];

        for (let i = 0; i < requestResponse.data.length; i++) {

            items.push(await entityMapper(OpenHabItem, requestResponse.data[i]));
        };

        return items;
    }

    
    public async getItemByName(coordinator: Coordinator, name: string): Promise<OpenHabItem> {
        /**
         * préparation de l'entité de requete
         */
         let request: Request = new Request();
         request.host = coordinator.host;
         request.port = coordinator.port;
         request.method = RequestMethod.GET;
         request.path = `${this.items}/${name}`;
         request.authorization = coordinator.authorization;
 
         let requestResponse: AxiosResponse = <AxiosResponse>await requestService.send(request);
        
         if (requestResponse.status != 200) {
 
             return;
         }
 
         return await entityMapper(OpenHabItem, requestResponse.data);  
    }

    /**
     * 
     * @param coordinator 
     * @param commandList 
     * @returns 
     */
    /*public async sendCommandList(coordinator: Coordinator, commandList: Array<CiredCommand>): Promise<CiredResponse[]> {

        let requestList: Request[] = [];
        for (let command of commandList) {
            /**
             * préparation de l'entité de requete
             */
    /*  let request = new Request();
      request.authorization = coordinator.authorization;
      request.host = coordinator.host;
      request.port = coordinator.port;
      request.method = RequestMethod.GET;
      request.path = this.requestPath;
      request.payload.query = command;
      request.timeout = 50;

      requestList.push(request);
  }

  let responseCiredList: CiredResponse[] = [];
  for (let i = 0 ; i < requestList.length ; i++) {
      let requests: Array<Request> = requestList.slice(i*3, i*3+3)
      if (requests.length > 0) {
          console.log(requests)
          let requestResponseList: AxiosResponse[] = <AxiosResponse[]>await requestService.sendList(requestList);  

          let j = 0;
          for (let response of requestResponseList) {
              if (response.status != 200) {
                  continue;
              }

              commandList[i*3+j].setResponse(await this.buildResponse(response.data));
              j++;
  
              responseCiredList.push(await this.buildResponse(response.data));
          }
          
      }
  }



  return responseCiredList;
}*/

    /**
     * 
     * @param coordinator 
     * @param command 
     * @returns 
     */
    /*public async sendCommand(coordinator: Coordinator, command: CiredCommand): Promise<CiredResponse> {

        /**
         * préparation de l'entité de requete
         */
    /* let request = new Request();
     request.authorization = coordinator.authorization;
     request.host = coordinator.host;
     request.port = coordinator.port;
     request.method = RequestMethod.GET;
     request.path = this.requestPath;
     request.payload.query = command;
     request.timeout = 200;

     let requestResponse: AxiosResponse

   //  for (let i = 0 ; i < this.retryCount ; i++) {
         try {
             requestResponse = <AxiosResponse>await requestService.send(request);
           
         } catch (error) {

         }   

         if (requestResponse && requestResponse.status == 200) {
 
             return await this.buildResponse(requestResponse.data);
         }
   //  }

     return await this.buildResponse(); 
 }
*/

    /**
        * Parse et build d'une reponse cired
        *
        * @param ciredResponse 
        */
    /* private async buildResponse(ciredResponse: string = ''): Promise<CiredResponse> {
 
        
 
         return responseBuilt;
     }*/

}

export const openhabCoordinatorService: OpenhabCoordinatorService = new OpenhabCoordinatorService();

