import { RequestAuthorization } from "../Request.model";

class ciredDeviceModel {
    protected readonly retryCount:number = 5;

    protected readonly requestPath: string = '/requete.xml';
    protected readonly infoPath: string = '/info.xml';
    
    public address: string;
    public authorization: RequestAuthorization;

}