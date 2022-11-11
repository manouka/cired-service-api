"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredValueException = exports.CiredGroupeException = exports.CiredChannelException = exports.CiredStateException = exports.CiredNotFoundException = exports.CiredTimerException = exports.CiredRelayException = exports.CiredFlagException = exports.CiredCommandException = exports.CiredAddressException = void 0;
const HttpException_1 = require("./HttpException");
class CiredAddressException extends HttpException_1.BadRequestException {
}
exports.CiredAddressException = CiredAddressException;
class CiredCommandException extends HttpException_1.BadRequestException {
    constructor(code, message = "Cired command error") {
        super(code.errorCode, message);
    }
}
exports.CiredCommandException = CiredCommandException;
CiredCommandException.command_entree_not_valid = { errorCode: 'CIRED_CMD_010' };
class CiredFlagException extends HttpException_1.BadRequestException {
}
exports.CiredFlagException = CiredFlagException;
class CiredRelayException extends HttpException_1.BadRequestException {
}
exports.CiredRelayException = CiredRelayException;
class CiredTimerException extends HttpException_1.BadRequestException {
}
exports.CiredTimerException = CiredTimerException;
class CiredNotFoundException extends HttpException_1.NotFoundException {
}
exports.CiredNotFoundException = CiredNotFoundException;
class CiredStateException extends HttpException_1.BadRequestException {
}
exports.CiredStateException = CiredStateException;
class CiredChannelException extends HttpException_1.BadRequestException {
}
exports.CiredChannelException = CiredChannelException;
class CiredGroupeException extends HttpException_1.BadRequestException {
}
exports.CiredGroupeException = CiredGroupeException;
class CiredValueException extends HttpException_1.BadRequestException {
}
exports.CiredValueException = CiredValueException;
//# sourceMappingURL=CiredException.js.map