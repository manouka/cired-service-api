import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { ComponentInterface } from "./Component";


export enum ElementType {
    ciredEntreeActionFlagSet,
    ciredEntreeActionFlagClear,
    ciredEntreeActionFlagToggle,
    ciredEntreeActionFlagExclusifSet,
    ciredEntreeReadFlag,
    ciredEntreeReadFlagExclusif,
    ciredEntreeReadLoop, 

    ciredSortieActionRelaySet,
    ciredSortieActionRelayClear,
    ciredSortieActionRelayToggle,
    ciredSortieReadRelay,

    ciredDmxActionChannel

}

export class ElementInterface {

    public id: number;
    public componentId: number;
    public type: ElementType;
    public alias: string;
    public component: ComponentInterface;
    public parameters: unknown;
}

export class Element implements ElementInterface {

    public id: number;
    public componentId: number;
    public type: ElementType;
    public alias: string;
    public component: ComponentInterface;
    public parameters: unknown;
}