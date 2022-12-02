import { BadRequestException, CodeException } from './HttpException'

export class DeviceException extends BadRequestException {

    static readonly generic: CodeException = { errorCode : 'DEVICE_001' };
    static readonly scanAllreadyStarted: CodeException = { errorCode : 'DEVICE_010' };
    static readonly notFound: CodeException = { errorCode : 'DEVICE_020' };
    static readonly badType: CodeException = { errorCode : 'DEVICE_030' };

    constructor(code: CodeException = DeviceException.generic, message: string = "Device error") {
        super(code, message);
    }
}