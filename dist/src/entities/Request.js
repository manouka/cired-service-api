"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestAuthorization = exports.RequestAuthorizationType = exports.RequestPayload = exports.Request = exports.RequestMethod = void 0;
const class_validator_1 = require("class-validator");
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
    RequestMethod["PATCH"] = "PATCH";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
class Request {
    constructor() {
        this.headers = {};
        this.payload = new RequestPayload();
        this.authorization = new RequestAuthorization();
    }
}
__decorate([
    (0, class_validator_1.IsUrl)()
], Request.prototype, "host", void 0);
__decorate([
    (0, class_validator_1.IsPort)(),
    (0, class_validator_1.IsOptional)()
], Request.prototype, "port", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], Request.prototype, "authorization", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(RequestMethod)
], Request.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsUrl)()
], Request.prototype, "path", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], Request.prototype, "proxy", void 0);
exports.Request = Request;
class RequestPayload {
    constructor() {
        this.query = {};
        this.body = {};
    }
}
exports.RequestPayload = RequestPayload;
var RequestAuthorizationType;
(function (RequestAuthorizationType) {
    RequestAuthorizationType["noAuth"] = "";
    RequestAuthorizationType["baseAuth"] = "Basic Auth";
    RequestAuthorizationType["bearerToken"] = "Bearer";
})(RequestAuthorizationType = exports.RequestAuthorizationType || (exports.RequestAuthorizationType = {}));
class RequestAuthorization {
}
__decorate([
    (0, class_validator_1.IsEnum)(RequestAuthorizationType),
    (0, class_validator_1.IsString)()
], RequestAuthorization.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], RequestAuthorization.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], RequestAuthorization.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], RequestAuthorization.prototype, "bearerToken", void 0);
exports.RequestAuthorization = RequestAuthorization;
//# sourceMappingURL=Request.js.map