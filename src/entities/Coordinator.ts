
import { RequestAuthorization } from "./Request";
import { IsString, IsNumber, IsOptional, IsPort, IsUrl, IsInstance, IsIn, IsEnum, IsObject } from "class-validator";


export enum CoordinatorType {
  ciredGateway = 'cired_gateway',
  ciredGatewayGsm = 'cired_gateway_gsm',
  openhab = 'openhab'
}

export interface CoordinatorInterface {


    id: number;
    installationId: number;
    type: CoordinatorType;
    host: string;
    port?: number;
    authorization?: RequestAuthorization;
    externalInformation?: unknown;
  //  public components: Array<ComponentModel>
}


export class Coordinator implements CoordinatorInterface {

    @IsNumber()
    @IsOptional()
    public id: number;

    @IsNumber()
    @IsOptional()
    public installationId: number;

    @IsEnum(CoordinatorType)
    @IsString()
    public type: CoordinatorType;

    @IsUrl()
    public host: string;

    @IsPort()
    @IsOptional()
    public port?: number;

    @IsObject()
    @IsOptional()
    public authorization?: RequestAuthorization;

    @IsOptional()
    public externalInformation?: unknown;
}