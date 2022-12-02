/**
 * dépendances internes
 */
import { BadRequestException, CodeException, NotFoundException } from './HttpException'


/**
 * 
 */
 export class CiredGenericException extends BadRequestException {

    static readonly generic: CodeException = { errorCode : 'CIRED_GENERIC_001' };
    static readonly scanAllreadyStarted: CodeException = { errorCode : 'CIRED_GENERIC_010' };

    constructor(code: CodeException = CiredGenericException.generic, message: string = "Cired error") {
        super(code);
    }
}

/**
 * 
 */
export class CiredAddressException extends CiredGenericException {

    static readonly areaNotAllowed: CodeException = { errorCode : 'CIRED_ADDRESS_010' };
    static readonly addressNotAllowed: CodeException = { errorCode : 'CIRED_ADDRESS_011' };
    static readonly addressNotResolved: CodeException = { errorCode : 'CIRED_ADDRESS_012' };

    constructor(code: CodeException = CiredGenericException.generic, message: string = "Cired address error") {
        super(code);
    }
}

/**
 * 
 */
export class CiredTypeException extends CiredGenericException {

    static readonly notAllowed: CodeException = { errorCode : 'CIRED_TYPE_010' };
    static readonly notDefined: CodeException = { errorCode : 'CIRED_TYPE_011' };

    constructor(code: CodeException = CiredGenericException.generic, message: string = "Cired type error") {
        super(code);
    }
}

/**
 * 
 */
export class CiredActionException extends CiredGenericException {

    static readonly notAllowed: CodeException = { errorCode : 'CIRED_CMD_010' };
    static readonly notDefined: CodeException = { errorCode : 'CIRED_CMD_011' };
    static readonly notDescribed: CodeException = { errorCode : 'CIRED_TYPE_012' };
    static readonly argumentNotAllowed: CodeException = { errorCode : 'CIRED_TYPE_013' };


    constructor(code: CodeException = CiredActionException.generic, message: string = "Cired action error") {
        super(code, message);
    }
}

/**
 * 
 */
export class CiredFlagException extends CiredGenericException {

    static readonly notAllowed: CodeException = { errorCode : 'CIRED_FLAG_010' };
    static readonly notDefined: CodeException = { errorCode : 'CIRED_FLAG_011' };

    constructor(code: CodeException = CiredGenericException.generic, message: string = "Cired flag error") {
        super(code, message);
    }
}

/**
 * 
 */
 export class CiredRelayException extends CiredGenericException {

    static readonly notAllowed: CodeException = { errorCode : 'CIRED_FLAG_010' };
    static readonly notDefined: CodeException = { errorCode : 'CIRED_FLAG_011' };

    constructor(code: CodeException = CiredGenericException.generic, message: string = "Cired flag error") {
        super(code, message);
    }
}

export class CiredStateException extends CiredGenericException {


    static readonly notAllowed: CodeException = { errorCode : 'CIRED_STATE_010' };
    static readonly notDefined: CodeException = { errorCode : 'CIRED_STATE_011' };

    constructor(code: CodeException = CiredGenericException.generic, message: string = "Cired State error") {
        super(code, message);
    }
}

export class CiredTimerException extends CiredGenericException {


    static readonly notAllowed: CodeException = { errorCode : 'CIRED_TIMER_010' };
    static readonly notDefined: CodeException = { errorCode : 'CIRED_TIMER_011' };

    constructor(code: CodeException = CiredGenericException.generic, message: string = "Cired State error") {
        super(code, message);
    }
}

