"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenHabBadSwitchStateFoundException = exports.OpenHabNotFoundException = exports.OpenHabCodeException = void 0;
const HttpException_1 = require("./HttpException");
var OpenHabCodeException;
(function (OpenHabCodeException) {
    OpenHabCodeException["badSwitchState"] = "OPEN_HAB_001";
    OpenHabCodeException["notFound"] = "OPEN_HAB_300";
})(OpenHabCodeException = exports.OpenHabCodeException || (exports.OpenHabCodeException = {}));
class OpenHabNotFoundException extends HttpException_1.BadRequestException {
    constructor(code, message = "OpenHab") {
        super(code, message);
    }
}
exports.OpenHabNotFoundException = OpenHabNotFoundException;
class OpenHabBadSwitchStateFoundException extends HttpException_1.BadRequestException {
    constructor(code, message = "OpenHab") {
        super(code, message);
    }
}
exports.OpenHabBadSwitchStateFoundException = OpenHabBadSwitchStateFoundException;
//# sourceMappingURL=OpenHabException.js.map