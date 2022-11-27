"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAuthorizationService = exports.RequestAuthorizationService = void 0;
const exceptions_1 = require("../../exceptions");
const Request_1 = require("../../entities/Request");
class RequestAuthorizationService {
    getHeaderAuthorization(authorization) {
        if (!authorization) {
            return null;
        }
        switch (authorization.type) {
            case Request_1.RequestAuthorizationType.baseAuth:
                return this.getAutorizationBasicAuth(authorization);
            case Request_1.RequestAuthorizationType.bearerToken:
                return this.getAutorizationBearer(authorization);
        }
    }
    getAutorizationBasicAuth(authorization) {
        if (!authorization.username) {
            throw new exceptions_1.RequestAuthorizationException(exceptions_1.RequestAuthorizationException.basicAuthUsername, 'Basic Auth : Miss username or can\'t be null.');
        }
        if (!authorization.password) {
            throw new exceptions_1.RequestAuthorizationException(exceptions_1.RequestAuthorizationException.basicAuthPassword, 'Basic Auth : Miss password or can\'t be null.');
        }
        return `Basic ${Buffer.from(`${authorization.username}:${authorization.password}`).toString('base64')}`;
    }
    getAutorizationBearer(authorization) {
        if (!authorization.bearerToken) {
            throw new exceptions_1.RequestAuthorizationException(exceptions_1.RequestAuthorizationException.bearerToken, 'Bearer Token : Miss token or can\'t be null.');
        }
        return `Bearer ${authorization.bearerToken}`;
    }
}
exports.RequestAuthorizationService = RequestAuthorizationService;
exports.requestAuthorizationService = new RequestAuthorizationService();
//# sourceMappingURL=RequestAuthorizationService.js.map