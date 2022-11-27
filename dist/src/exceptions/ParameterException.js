"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterException = void 0;
const HttpException_1 = require("./HttpException");
class ParameterException extends HttpException_1.BadRequestException {
    constructor(code = ParameterException.badParameter, message = 'Bad parameter') {
        super(code, message);
    }
}
exports.ParameterException = ParameterException;
ParameterException.badParameter = { errorCode: 'PARAM_001' };
ParameterException.missingParameter = { errorCode: 'PARAM_010' };
ParameterException.validator = { errorCode: 'PARAM_020' };
//# sourceMappingURL=ParameterException.js.map