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
exports.ciredDeviceService = void 0;
const Device_1 = require("../../entities/Device");
const CiredCommand_1 = require("../../entities/cired/CiredCommand");
const describe_1 = require("../../entities/cired/describe");
const CiredCoordinatorService_1 = require("./CiredCoordinatorService");
const CiredResponse_1 = require("../../entities/cired/CiredResponse");
const DeviceExceptions_1 = require("../../exceptions/DeviceExceptions");
const Convertor_1 = require("../../tool/Convertor");
const DeviceRepository_1 = require("../../repositories/DeviceRepository");
const ComponentService_1 = require("../ComponentService");
class CiredDeviceService {
    constructor() {
        this.scanDeviceRemaining = 0;
    }
    scanAllDevices(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.scanDeviceRemaining > 0) {
                throw new DeviceExceptions_1.DeviceException(DeviceExceptions_1.DeviceException.scanAllreadyStarted, `Device cired scan allready started, wait for the end before waiting for a new one. Time remaining ${(0, Convertor_1.timeConvert)(this.scanDeviceRemaining)}`);
            }
            this.scanDeviceRemaining = describe_1.CiredAddressRange.length;
            let devices = [];
            for (let i = 0; i < describe_1.CiredAddressRange.length; i++) {
                let command = new CiredCommand_1.CiredCommand(describe_1.CiredActionSystem.readVersion);
                command.setCompleteAddress(describe_1.CiredArea.area_1, describe_1.CiredAddressRange[i]);
                command.validate();
                let response = yield CiredCoordinatorService_1.ciredCoordinatorService.sendCommand(coordinator, command);
                if (response.reponse != CiredResponse_1.CiredResponseCode.ok) {
                    yield new Promise(f => setTimeout(f, 500));
                }
                else {
                    let device = new Device_1.Device();
                    device.alias = `device_${Device_1.DeviceType.cired}_${describe_1.CiredAddressRange[i]}`;
                    device.information = response;
                    device.type = Device_1.DeviceType.cired;
                    device.address = describe_1.CiredAddressRange[i].toString();
                    let deviceModel = yield DeviceRepository_1.deviceRepository.create(device);
                    deviceModel.$set('coordinator', coordinator);
                    yield deviceModel.save();
                    devices.push(deviceModel);
                    yield ComponentService_1.componentService.upsertAllByDevice(deviceModel);
                }
                this.scanDeviceRemaining--;
            }
            this.scanDeviceRemaining = 0;
            return devices;
        });
    }
}
exports.ciredDeviceService = new CiredDeviceService();
//# sourceMappingURL=CiredDeviceService.js.map