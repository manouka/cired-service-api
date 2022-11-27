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
exports.deviceService = exports.DeviceAction = void 0;
const Coordinator_1 = require("../entities/Coordinator");
const CiredDeviceService_1 = require("./cired/CiredDeviceService");
var DeviceAction;
(function (DeviceAction) {
})(DeviceAction = exports.DeviceAction || (exports.DeviceAction = {}));
class DeviceService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    scanAllDevices(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getDeviceService(coordinator.type).scanAllDevices(coordinator);
        });
    }
    upsert() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getDeviceService(coordinatorType) {
        if (coordinatorType == Coordinator_1.CoordinatorType.ciredGateway || coordinatorType == Coordinator_1.CoordinatorType.ciredGatewayGsm) {
            return CiredDeviceService_1.ciredDeviceService;
        }
    }
}
exports.deviceService = new DeviceService();
//# sourceMappingURL=DeviceService.js.map