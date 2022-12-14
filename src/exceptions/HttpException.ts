


export type CodeException = { errorCode: string}

/**
 * Excption du type http
 * 
 * Auteurs: Emmanuel SIMAO
 */
export class GenericException extends Error {

    status: number;
    code: string;
    message: string;

    constructor(status: number, code: CodeException, message: string) {

        super(message);
        this.status = status;
        this.code = code.errorCode;
        this.message = message;
    }
}

/**
 * Exception 40X
 */

/**
 * 
 */
export class BadRequestException extends GenericException {

    constructor(code: CodeException, message: string = "Bad request") {
        super(400, code, message);
    }
};

/**
 * 
 */
export class NotAllowedException extends GenericException {

    constructor(code: CodeException, message: string = "Access not allowed") {
        super(401, code, message);
    }
};

/**
 * 
 */
export class NotAuthorizedException extends GenericException {
    constructor(code: CodeException, message: string = "Access not authorized") {
        super(403, code, message);
    }
};

/**
 * 
 */
export class NotFoundException extends GenericException {
    constructor(code: CodeException, message: string = "Not Found") {
        super(404, code, message);
    }
};

/**
 * 
 */
export class MethodNotAllowedException extends GenericException {

    constructor(code: CodeException, message: string = "Method not allowed") {
        super(405, code, message);
    }
};

/**
 * Exception 50X
 */
/**
 * 
 */
export class ServiceUnavailableException extends GenericException {

    constructor(code: CodeException, message: string = "Service unavailable") {
        super(503, code, message);
    }
};

