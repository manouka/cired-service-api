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
const DeviceRepository_1 = require("../repositories/DeviceRepository");
const Coordinator_1 = require("../entities/Coordinator");
const CiredDeviceService_1 = require("./cired/CiredDeviceService");
const OpenhabDeviceService_1 = require("./openhab/OpenhabDeviceService");
const DeviceExceptions_1 = require("../exceptions/DeviceExceptions");
var DeviceAction;
(function (DeviceAction) {
})(DeviceAction = exports.DeviceAction || (exports.DeviceAction = {}));
class DeviceService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DeviceRepository_1.deviceRepository.findAll();
        });
    }
    scanAllDevices(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getDeviceService(coordinator.type).scanAllDevices(coordinator);
            }
            catch (error) {
            }
        });
    }
    getAllByCoordinatorId(coordinatorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DeviceRepository_1.deviceRepository.findAllByCordinatorId(coordinatorId);
        });
    }
    getAllByInstallationId(installationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let devices = yield DeviceRepository_1.deviceRepository.findAllByInstallationId(installationId);
            return devices;
        });
    }
    getById(deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            let device = yield DeviceRepository_1.deviceRepository.findById(deviceId);
            if (!device) {
                throw new DeviceExceptions_1.DeviceException(DeviceExceptions_1.DeviceException.notFound, `Device id ${deviceId} not found`);
            }
            return device;
        });
    }
    upsert(device, checkExistance = true) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getDeviceService(coordinatorType) {
        if (coordinatorType == Coordinator_1.CoordinatorType.ciredGateway || coordinatorType == Coordinator_1.CoordinatorType.ciredGatewayGsm) {
            return CiredDeviceService_1.ciredDeviceService;
        }
        else if (coordinatorType == Coordinator_1.CoordinatorType.openhab) {
            return OpenhabDeviceService_1.openhabDeviceService;
        }
    }
}
exports.deviceService = new DeviceService();
//# sourceMappingURL=DeviceService.js.map