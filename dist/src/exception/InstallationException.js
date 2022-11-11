"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallationNotFoundException = exports.InstallationCodeException = void 0;
const HttpException_1 = require("./HttpException");
var InstallationCodeException;
(function (InstallationCodeException) {
    InstallationCodeException["notFound"] = "INSTALLATION_001";
})(InstallationCodeException = exports.InstallationCodeException || (exports.InstallationCodeException = {}));
class InstallationNotFoundException extends HttpException_1.NotFoundException {
    constructor(code = InstallationCodeException.notFound, message = "Installation not found") {
        super(code, message);
    }
}
exports.InstallationNotFoundException = InstallationNotFoundException;
//# sourceMappingURL=InstallationException.js.map