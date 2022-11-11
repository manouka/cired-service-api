"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementNotFoundException = exports.ElementNotAllowedException = exports.ElementTypeException = exports.ElementCodeException = void 0;
const HttpException_1 = require("./HttpException");
var ElementCodeException;
(function (ElementCodeException) {
    ElementCodeException["notFound"] = "ELEMENT_001";
    ElementCodeException["unknownType"] = "ELEMENT_101";
    ElementCodeException["badType"] = "ELEMENT_102";
})(ElementCodeException = exports.ElementCodeException || (exports.ElementCodeException = {}));
class ElementTypeException extends HttpException_1.BadRequestException {
    constructor(code, message = "Element type error") {
        super(code, message);
    }
}
exports.ElementTypeException = ElementTypeException;
class ElementNotAllowedException extends HttpException_1.MethodNotAllowedException {
    constructor(code, message = "Element not allowed error") {
        super(code, message);
    }
}
exports.ElementNotAllowedException = ElementNotAllowedException;
class ElementNotFoundException extends HttpException_1.NotFoundException {
    constructor(code, message = "Element not found") {
        super(code, message);
    }
}
exports.ElementNotFoundException = ElementNotFoundException;
//# sourceMappingURL=ElementException.js.map