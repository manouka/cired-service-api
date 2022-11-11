

import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    ValidatorConstraintInterface,
    ValidationArguments,
    IsEnum,
    IsString,
    IsIP,
    IsIn,
    IsObject,
    isIn,
    isInt,
} from 'class-validator';
import { Model } from 'sequelize/types';
import { RequestAuthorization } from '../model/Request.model';


export enum DeviceType {
    cired = 0,
}


export abstract class DeviceInterface {

    public id: number;
    public name: string;
    public address: string;
    public type: DeviceType;
    public authorization: RequestAuthorization;
}


export class Device  {

    @IsInt()
    public id: number;

    public name: string;

    @IsIP(4)
    public address: string;

    @IsInt()
    // @Min(deviceType.cired)
    // @Max(deviceType.cired)
    public type: DeviceType;

    @IsObject()
    public authorization: RequestAuthorization;

    /**
     * 
     */
    public async validate() {

        await validate(this);
    }
}

