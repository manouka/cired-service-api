"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAuthorizationService = exports.RequestAuthorizationService = void 0;
const Request_model_1 = require("../../model/Request.model");
class RequestAuthorizationService {
    getHeaderAuthorization(authorization) {
        if (!authorization) {
            return null;
        }
        switch (authorization.type) {
            case Request_model_1.RequestAuthorizationType.baseAuth:
                return this.getAutorizationBasicAuth(authorization);
            case Request_model_1.RequestAuthorizationType.bearerToken:
                return this.getAutorizationBearer(authorization);
        }
    }
    getAutorizationBasicAuth(authorization) {
        if (!authorization.username) {
        }
        if (!authorization.password) {
        }
        return `Basic ${Buffer.from(`${authorization.username}:${authorization.password}`).toString('base64')}`;
    }
    getAutorizationBearer(authorization) {
        if (!authorization.bearerToken) {
        }
        return `Bearer ${authorization.bearerToken}`;
    }
}
exports.RequestAuthorizationService = RequestAuthorizationService;
exports.requestAuthorizationService = new RequestAuthorizationService();
//# sourceMappingURL=RequestAuthorizationService.js.map