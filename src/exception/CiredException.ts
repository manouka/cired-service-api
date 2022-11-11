/**
 * dépendances internes
 */
import { BadRequestException, NotFoundException } from './HttpException'

/**
 * 
 */
/*export enum CiredCodeException {

    missArea = 'CIRED_080',
    missAddress = 'CIRED_090',

    missFlagIndex = 'CIRED_100',
    missFlagState = 'CIRED_101',
    badFlagTimer = 'CIRED_102',

    unknownType = 'CIRED_260',


    notFound = 'CIRED_300',
}
*/
type CiredCodeException = { errorCode: string }
/**
 * 
 */
export class CiredAddressException extends BadRequestException {
    /*constructor(code: CiredCodeException, message: string = "Cired address error") {
        super(code, message);
    }*/
}

/**
 * 
 */
export class CiredCommandException extends BadRequestException {

    static readonly command_entree_not_valid: CiredCodeException = { errorCode : 'CIRED_CMD_010' };
    
    constructor(code: CiredCodeException, message: string = "Cired command error") {
        super(code.errorCode, message);
    }
}

/**
 * 
 */
export class CiredFlagException extends BadRequestException {
    /*constructor(code: CiredCodeException, message: string = "Cired flag error") {
        super(code, message);
    }*/
}

/**
 * 
 */
export class CiredRelayException extends BadRequestException {
   /* constructor(code: CiredCodeException, message: string = "Cired relay error") {
        super(code, message);
    }*/
}

/**
 * 
 */
export class CiredTimerException extends BadRequestException {
   /* constructor(code: CiredCodeException, message: string = "Cired timer error") {
        super(code, message);
    }*/
}

/**
 * 
 */
export class CiredNotFoundException extends NotFoundException {
   /* constructor(code: CiredCodeException = CiredCodeException.notFound, message: string = "Cired device not found") {
        super(code, message);
    }*/
}

/**
 * 
 */
export class CiredStateException extends BadRequestException {
   /* constructor(code: CiredCodeException, message: string = "Cired state error") {
        super(code, message);
    }*/
}

/**
 * 
 */
export class CiredChannelException extends BadRequestException {
  /*  constructor(code: CiredCodeException, message: string = "Cired channel error") {
        super(code, message);
    }*/
}

/**
 * 
 */
 export class CiredGroupeException extends BadRequestException {
  /*  constructor(code: CiredCodeException, message: string = "Cired groupe error") {
        super(code, message);
    }*/
}

/**
 * 
 */
 export class CiredValueException extends BadRequestException {
   /* constructor(code: CiredCodeException, message: string = "Cired value error") {
        super(code, message);
    }*/
}
