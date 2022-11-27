import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";


export enum DeviceType {
    cired = 'cired',
}

export class DeviceInterface {


    public id: number;

    public coordinatorId: number;
    public type: DeviceType;

    public address: string;

    public information?: unknown;
}

export class Device implements DeviceInterface {

    @IsNumber()
    @IsOptional()
    public id: number;

    @IsNumber()
    public coordinatorId: number;

    @IsEnum(DeviceType)
    @IsString()
    public type: DeviceType;

    @IsString()
    public address: string;

    public information?: unknown;
}