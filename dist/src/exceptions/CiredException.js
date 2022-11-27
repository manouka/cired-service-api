"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredTimerException = exports.CiredStateException = exports.CiredRelayException = exports.CiredFlagException = exports.CiredActionException = exports.CiredTypeException = exports.CiredAddressException = exports.CiredGenericException = void 0;
const HttpException_1 = require("./HttpException");
class CiredGenericException extends HttpException_1.BadRequestException {
    constructor(code = CiredGenericException.generic, message = "Cired error") {
        super(code);
    }
}
exports.CiredGenericException = CiredGenericException;
CiredGenericException.generic = { errorCode: 'CIRED_GENERIC_001' };
class CiredAddressException extends CiredGenericException {
    constructor(code = CiredGenericException.generic, message = "Cired address error") {
        super(code);
    }
}
exports.CiredAddressException = CiredAddressException;
CiredAddressException.areaNotAllowed = { errorCode: 'CIRED_ADDRESS_010' };
CiredAddressException.addressNotAllowed = { errorCode: 'CIRED_ADDRESS_011' };
CiredAddressException.addressNotResolved = { errorCode: 'CIRED_ADDRESS_012' };
class CiredTypeException extends CiredGenericException {
    constructor(code = CiredGenericException.generic, message = "Cired type error") {
        super(code);
    }
}
exports.CiredTypeException = CiredTypeException;
CiredTypeException.notAllowed = { errorCode: 'CIRED_TYPE_010' };
CiredTypeException.notDefined = { errorCode: 'CIRED_TYPE_011' };
class CiredActionException extends CiredGenericException {
    constructor(code = CiredActionException.generic, message = "Cired action error") {
        super(code, message);
    }
}
exports.CiredActionException = CiredActionException;
CiredActionException.notAllowed = { errorCode: 'CIRED_CMD_010' };
CiredActionException.notDefined = { errorCode: 'CIRED_CMD_011' };
CiredActionException.notDescribed = { errorCode: 'CIRED_TYPE_012' };
CiredActionException.argumentNotAllowed = { errorCode: 'CIRED_TYPE_013' };
class CiredFlagException extends CiredGenericException {
    constructor(code = CiredGenericException.generic, message = "Cired flag error") {
        super(code, message);
    }
}
exports.CiredFlagException = CiredFlagException;
CiredFlagException.notAllowed = { errorCode: 'CIRED_FLAG_010' };
CiredFlagException.notDefined = { errorCode: 'CIRED_FLAG_011' };
class CiredRelayException extends CiredGenericException {
    constructor(code = CiredGenericException.generic, message = "Cired flag error") {
        super(code, message);
    }
}
exports.CiredRelayException = CiredRelayException;
CiredRelayException.notAllowed = { errorCode: 'CIRED_FLAG_010' };
CiredRelayException.notDefined = { errorCode: 'CIRED_FLAG_011' };
class CiredStateException extends CiredGenericException {
    constructor(code = CiredGenericException.generic, message = "Cired State error") {
        super(code, message);
    }
}
exports.CiredStateException = CiredStateException;
CiredStateException.notAllowed = { errorCode: 'CIRED_STATE_010' };
CiredStateException.notDefined = { errorCode: 'CIRED_STATE_011' };
class CiredTimerException extends CiredGenericException {
    constructor(code = CiredGenericException.generic, message = "Cired State error") {
        super(code, message);
    }
}
exports.CiredTimerException = CiredTimerException;
CiredTimerException.notAllowed = { errorCode: 'CIRED_TIMER_010' };
CiredTimerException.notDefined = { errorCode: 'CIRED_TIMER_011' };
//# sourceMappingURL=CiredException.js.map