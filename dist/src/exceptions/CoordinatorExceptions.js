"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinatorException = void 0;
const HttpException_1 = require("./HttpException");
class CoordinatorException extends HttpException_1.BadRequestException {
    constructor(code = CoordinatorException.generic, message = "COORDINATOR error") {
        super(code, message);
    }
}
exports.CoordinatorException = CoordinatorException;
CoordinatorException.generic = { errorCode: 'COORDINATOR_001' };
CoordinatorException.notFound = { errorCode: 'COORDINATOR_010' };
CoordinatorException.alreadyExist = { errorCode: 'COORDINATOR_011' };
CoordinatorException.noReply = { errorCode: 'COORDINATOR_020' };
//# sourceMappingURL=CoordinatorExceptions.js.map