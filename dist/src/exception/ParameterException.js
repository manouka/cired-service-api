"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingParameterException = exports.BadParameterException = exports.ParameterCodeException = void 0;
const HttpException_1 = require("./HttpException");
var ParameterCodeException;
(function (ParameterCodeException) {
    ParameterCodeException["badParameter"] = "PARAM_001";
    ParameterCodeException["missingParameter"] = "PARAM_100";
})(ParameterCodeException = exports.ParameterCodeException || (exports.ParameterCodeException = {}));
class BadParameterException extends HttpException_1.BadRequestException {
    constructor(code, message = "Bad parameter") {
        super(code, message);
    }
}
exports.BadParameterException = BadParameterException;
class MissingParameterException extends HttpException_1.BadRequestException {
    constructor(code, message = "Missing parameter") {
        super(code, message);
    }
}
exports.MissingParameterException = MissingParameterException;
//# sourceMappingURL=ParameterException.js.map