import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { DeviceInterface } from "./Device";
import { ElementInterface } from "./Element";


export enum ComponentType {
    ciredEntreeFlag,
    ciredEntreeFlagExclusif,
    ciredEntreeLoop,

    ciredSortieRelay,

    ciredDmxChannel,
    ciredDmxGroup,
    ciredDmxGroupRgb,

    openhabSwitch,


}

export class ComponentInterface {

    public id: number;
    public deviceId: number;
    public type: ComponentType;
    public index: number;
    public alias: string;
    public name: string;
    public device: DeviceInterface;
    public elements: Array<ElementInterface>;
    public information: string;
}

export class Component implements ComponentInterface {

    public id: number;
    public deviceId: number;
    public type: ComponentType;
    public index: number;
    public alias: string;
    public name: string;
    public device: DeviceInterface;
    public elements: Array<ElementInterface>;
    public information: string;
}