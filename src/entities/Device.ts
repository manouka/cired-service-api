import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";


export enum DeviceType {
    cired = 'cired',
    openhab = 'openhab',
}

export class DeviceInterface {
    public id: number;
    public coordinatorId: number;
    public type: DeviceType;
    public address: string;
    public alias: string;
    public information?: unknown;
}

export class Device implements DeviceInterface {
    public id: number;
    public coordinatorId: number;
    public type: DeviceType;
    public address: string;
    public alias: string;
    public information?: unknown;
}