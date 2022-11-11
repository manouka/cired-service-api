"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableException = exports.MethodNotAllowedException = exports.NotFoundException = exports.NotAuthorizedException = exports.NotAllowedException = exports.BadRequestException = exports.GenericException = void 0;
class GenericException extends Error {
    constructor(status, code, message) {
        super(message);
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
exports.GenericException = GenericException;
class BadRequestException extends GenericException {
    constructor(code = '', message = "Bad request") {
        super(400, code, message);
    }
}
exports.BadRequestException = BadRequestException;
;
class NotAllowedException extends GenericException {
    constructor(code = '', message = "Access not allowed") {
        super(401, code, message);
    }
}
exports.NotAllowedException = NotAllowedException;
;
class NotAuthorizedException extends GenericException {
    constructor(code = '', message = "Access not authorized") {
        super(403, code, message);
    }
}
exports.NotAuthorizedException = NotAuthorizedException;
;
class NotFoundException extends GenericException {
    constructor(code = '', message = "Not Found") {
        super(404, code, message);
    }
}
exports.NotFoundException = NotFoundException;
;
class MethodNotAllowedException extends GenericException {
    constructor(code = '', message = "Method not allowed") {
        super(405, code, message);
    }
}
exports.MethodNotAllowedException = MethodNotAllowedException;
;
class ServiceUnavailableException extends GenericException {
    constructor(code = '', message = "Service unavailable") {
        super(503, code, message);
    }
}
exports.ServiceUnavailableException = ServiceUnavailableException;
;
//# sourceMappingURL=HttpException.js.map