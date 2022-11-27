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
exports.coordinatorCiredGatewayService = void 0;
const Request_1 = require("../../entities/Request");
const xml2js = require("xml2js");
const RequestService_1 = require("../request/RequestService");
class CoordinatorCiredGatewayService {
    constructor() {
        this.retryCount = 5;
        this.requestPath = '/requete.xml';
        this.infoPath = '/info.xml';
        this.xmlParser = new xml2js.Parser({ explicitArray: false });
    }
    requestInformation(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new Request_1.Request();
            request.host = coordinator.host;
            request.port = coordinator.port;
            request.method = Request_1.RequestMethod.GET;
            request.path = this.infoPath;
            request.authorization = coordinator.authorization;
            let requestResponse = yield RequestService_1.requestService.send(request);
            if (requestResponse.status != 200) {
                return coordinator;
            }
            coordinator.externalInformation = yield this.buildResponse(requestResponse.data);
            return coordinator;
        });
    }
    sendCommand(coordinator, command) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    buildResponse(ciredResponse = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let responseBuilt;
            if (ciredResponse == '') {
                responseBuilt = yield this.xmlParser.parseStringPromise('<cired></cired>');
                return responseBuilt;
            }
            let responseParsed = yield this.xmlParser.parseStringPromise(ciredResponse);
            if (responseParsed.cired) {
                responseBuilt = responseParsed.cired;
            }
            responseBuilt.updatedAt = Date.now();
            return responseBuilt;
        });
    }
}
exports.coordinatorCiredGatewayService = new CoordinatorCiredGatewayService();
//# sourceMappingURL=CoordinatorCiredGatewayService.js.map