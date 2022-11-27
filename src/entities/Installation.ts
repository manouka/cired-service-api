import { IsString, IsNumber, IsOptional } from "class-validator";
import { CoordinatorInterface } from "./Coordinator";


export interface InstallationInterface {
    id: number;
    name: string;
    coordinators?: Array<CoordinatorInterface>;
}

export class Installation implements InstallationInterface {

    @IsOptional()
    public id: number;

    @IsOptional()
    @IsString()
    public name: string = null;

    @IsOptional()
    public coordinators?: Array<CoordinatorInterface>;
}