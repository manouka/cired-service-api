"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallationException = void 0;
const HttpException_1 = require("./HttpException");
class InstallationException extends HttpException_1.BadRequestException {
    constructor(code = InstallationException.generic, message = "Installation error") {
        super(code, message);
    }
}
exports.InstallationException = InstallationException;
InstallationException.generic = { errorCode: 'INSTALLATION_001' };
InstallationException.notFound = { errorCode: 'INSTALLATION_010' };
InstallationException.alreadyExist = { errorCode: 'INSTALLATION_011' };
//# sourceMappingURL=InstallationException.js.map