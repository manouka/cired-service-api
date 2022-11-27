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
exports.requestService = exports.RequestService = void 0;
const exceptions_1 = require("../../exceptions");
const Request_1 = require("../../entities/Request");
const RequestAuthorizationService_1 = require("./RequestAuthorizationService");
const axios_1 = require("axios");
const querystring_1 = require("querystring");
class RequestService {
    send(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPromiseRequest(request);
        });
    }
    sendList(requestEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestPromiseList = [];
            for (let request of requestEntities) {
                requestPromiseList.push(this.getPromiseRequest(request));
            }
            return yield axios_1.default.all(requestPromiseList);
        });
    }
    getPromiseRequest(request) {
        let authorization = request.authorization;
        let autorizationHeader = RequestAuthorizationService_1.requestAuthorizationService.getHeaderAuthorization(authorization);
        if (autorizationHeader) {
            Object.assign(request.headers, { Authorization: autorizationHeader });
        }
        if (!Object.values(Request_1.RequestMethod).includes(request.method)) {
            throw new exceptions_1.RequestException(exceptions_1.RequestException.methodNotAllowed, `Request method ${request.method} not allowed.`);
        }
        let query = request.payload && request.payload.query ? (0, querystring_1.stringify)(request.payload.query) : '';
        let path = `${request.host}${request.port ? `:${request.port}` : ''}${request.path}?${query}`;
        var config = {
            method: request.method,
            url: path,
            headers: request.headers,
            data: request.payload && request.payload.body ? request.payload.body : '',
            timeout: 500,
        };
        return (0, axios_1.default)(config);
        if (request.method == Request_1.RequestMethod.GET) {
            return axios_1.default.get(path, { headers: request.headers, timeout: 500 });
        }
        if (request.method == Request_1.RequestMethod.POST) {
        }
    }
}
exports.RequestService = RequestService;
exports.requestService = new RequestService();
//# sourceMappingURL=RequestService.js.map