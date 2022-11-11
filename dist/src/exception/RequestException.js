"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBasicAuthException = exports.RequestMethodNotAllowed = exports.RequestCodeException = void 0;
const HttpException_1 = require("./HttpException");
var RequestCodeException;
(function (RequestCodeException) {
    RequestCodeException["basicAuthUsername"] = "REQUEST_001";
    RequestCodeException["basicAuthPassword"] = "REQUEST_002";
    RequestCodeException["bearerToken"] = "REQUEST_003";
    RequestCodeException["methodNotAllowed"] = "REQUEST_100";
})(RequestCodeException = exports.RequestCodeException || (exports.RequestCodeException = {}));
class RequestMethodNotAllowed extends HttpException_1.NotAllowedException {
    constructor(code, message = "Request method not allowed error") {
        super(code, message);
    }
}
exports.RequestMethodNotAllowed = RequestMethodNotAllowed;
class RequestBasicAuthException extends HttpException_1.NotAuthorizedException {
    constructor(code, message = "Request basic auth error") {
        super(code, message);
    }
}
exports.RequestBasicAuthException = RequestBasicAuthException;
//# sourceMappingURL=RequestException.js.map