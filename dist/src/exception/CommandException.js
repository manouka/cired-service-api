"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandNotFoundException = exports.CommandTypeException = exports.CommandCodeException = void 0;
const HttpException_1 = require("./HttpException");
var CommandCodeException;
(function (CommandCodeException) {
    CommandCodeException["notFound"] = "COMMAND_001";
    CommandCodeException["unknownType"] = "COMMAND_101";
})(CommandCodeException = exports.CommandCodeException || (exports.CommandCodeException = {}));
class CommandTypeException extends HttpException_1.BadRequestException {
    constructor(code, message = "Command type error") {
        super(code, message);
    }
}
exports.CommandTypeException = CommandTypeException;
class CommandNotFoundException extends HttpException_1.NotFoundException {
    constructor(code, message = "Command not found") {
        super(code, message);
    }
}
exports.CommandNotFoundException = CommandNotFoundException;
//# sourceMappingURL=CommandException.js.map