"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestAuthorizationException = exports.RequestException = exports.RequestCodeException = void 0;
const HttpException_1 = require("./HttpException");
var RequestCodeException;
(function (RequestCodeException) {
})(RequestCodeException = exports.RequestCodeException || (exports.RequestCodeException = {}));
class RequestException extends HttpException_1.NotAllowedException {
    constructor(code, message = "Request method not allowed error") {
        super(code, message);
    }
}
exports.RequestException = RequestException;
RequestException.methodNotAllowed = { errorCode: 'REQUEST_100' };
RequestException.invalid = { errorCode: 'REQUEST_101' };
class RequestAuthorizationException extends HttpException_1.NotAuthorizedException {
    constructor(code, message = "Request basic auth error") {
        super(code, message);
    }
}
exports.RequestAuthorizationException = RequestAuthorizationException;
RequestAuthorizationException.basicAuthUsername = { errorCode: 'REQUEST_001' };
RequestAuthorizationException.basicAuthPassword = { errorCode: 'REQUEST_002' };
RequestAuthorizationException.bearerToken = { errorCode: 'REQUEST_003' };
//# sourceMappingURL=RequestException.js.map