/**
 * dépendances internes
 */
import { BadRequestException, NotFoundException, ServiceUnavailableException } from './HttpException'

/**
 * 
 */
export enum DeviceCodeException {
    notFound = 'DEVICE_001',
    notFoundCiredGateway = 'DEVICE_002',
    unavailableCiredIn = 'DEVICE_003',
    unavailableCiredOut = 'DEVICE_004',
    unavailableCiredDmx = 'DEVICE_005',

    notFoundOpenHab = 'DEVICE_010',  

    unknownType = 'DEVICE_101',
    badType = 'DEVICE_102',


}

/**
 * 
 */
export class DeviceTypeException extends BadRequestException {
    constructor(code: DeviceCodeException, message: string = "Device type error") {
        super(code, message);
    }
}

/**
 * 
 */
export class DeviceNotFoundException extends NotFoundException {
    constructor(code: DeviceCodeException, message: string = "Device not found") {
        super(code, message);
    }
}

/**
 * 
 */
export class DeviceUnavailable extends ServiceUnavailableException {
    constructor(code: DeviceCodeException, message: string = "Element not allowed error") {
        super(code, message);
    }
}