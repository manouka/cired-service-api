"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroNotFoundException = exports.MacroTypeException = exports.MacroCodeException = void 0;
const HttpException_1 = require("./HttpException");
var MacroCodeException;
(function (MacroCodeException) {
    MacroCodeException["notFound"] = "MACRO_001";
    MacroCodeException["unknownType"] = "MACRO_101";
})(MacroCodeException = exports.MacroCodeException || (exports.MacroCodeException = {}));
class MacroTypeException extends HttpException_1.BadRequestException {
    constructor(code, message = "Macro type error") {
        super(code, message);
    }
}
exports.MacroTypeException = MacroTypeException;
class MacroNotFoundException extends HttpException_1.NotFoundException {
    constructor(code, message = "Macro not found") {
        super(code, message);
    }
}
exports.MacroNotFoundException = MacroNotFoundException;
//# sourceMappingURL=MacroException.js.map