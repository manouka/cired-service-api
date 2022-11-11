"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorException = exports.DecoratorCodeException = void 0;
const HttpException_1 = require("./HttpException");
var DecoratorCodeException;
(function (DecoratorCodeException) {
    DecoratorCodeException["unknownType"] = "DECORATOR_900";
})(DecoratorCodeException = exports.DecoratorCodeException || (exports.DecoratorCodeException = {}));
class DecoratorException extends HttpException_1.BadRequestException {
    constructor(code, message = "Decorator error") {
        super(code, message);
    }
}
exports.DecoratorException = DecoratorException;
//# sourceMappingURL=DecoratorException.js.map