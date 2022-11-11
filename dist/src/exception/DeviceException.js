"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceUnavailable = exports.DeviceNotFoundException = exports.DeviceTypeException = exports.DeviceCodeException = void 0;
const HttpException_1 = require("./HttpException");
var DeviceCodeException;
(function (DeviceCodeException) {
    DeviceCodeException["notFound"] = "DEVICE_001";
    DeviceCodeException["notFoundCiredGateway"] = "DEVICE_002";
    DeviceCodeException["unavailableCiredIn"] = "DEVICE_003";
    DeviceCodeException["unavailableCiredOut"] = "DEVICE_004";
    DeviceCodeException["unavailableCiredDmx"] = "DEVICE_005";
    DeviceCodeException["notFoundOpenHab"] = "DEVICE_010";
    DeviceCodeException["unknownType"] = "DEVICE_101";
    DeviceCodeException["badType"] = "DEVICE_102";
})(DeviceCodeException = exports.DeviceCodeException || (exports.DeviceCodeException = {}));
class DeviceTypeException extends HttpException_1.BadRequestException {
    constructor(code, message = "Device type error") {
        super(code, message);
    }
}
exports.DeviceTypeException = DeviceTypeException;
class DeviceNotFoundException extends HttpException_1.NotFoundException {
    constructor(code, message = "Device not found") {
        super(code, message);
    }
}
exports.DeviceNotFoundException = DeviceNotFoundException;
class DeviceUnavailable extends HttpException_1.ServiceUnavailableException {
    constructor(code, message = "Element not allowed error") {
        super(code, message);
    }
}
exports.DeviceUnavailable = DeviceUnavailable;
//# sourceMappingURL=DeviceException.js.map