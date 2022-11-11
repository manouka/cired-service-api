"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestAuthorization = exports.RequestAuthorizationType = exports.RequestMethod = void 0;
const class_validator_1 = require("class-validator");
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
    RequestMethod["PATCH"] = "PATCH";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
var RequestAuthorizationType;
(function (RequestAuthorizationType) {
    RequestAuthorizationType["noAuth"] = "";
    RequestAuthorizationType["baseAuth"] = "Basic Auth";
    RequestAuthorizationType["bearerToken"] = "Bearer";
})(RequestAuthorizationType = exports.RequestAuthorizationType || (exports.RequestAuthorizationType = {}));
class RequestAuthorization {
    constructor() {
        this.type = RequestAuthorizationType.noAuth;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, class_validator_1.validate)(this);
        });
    }
}
exports.RequestAuthorization = RequestAuthorization;
//# sourceMappingURL=Request.model.js.map