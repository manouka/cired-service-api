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
const CiredCommand_1 = require("../../entities/cired/CiredCommand");
const describe_1 = require("../../entities/cired/describe");
const CiredCoordinatorService_1 = require("./CiredCoordinatorService");
class CiredDeviceService {
    scanAllDevices(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            let command = new CiredCommand_1.CiredCommand(describe_1.CiredActionSystem.readVersion);
            command.setCompleteAddress(describe_1.CiredArea.area_1, 0);
            console.log(command);
            let response = yield CiredCoordinatorService_1.ciredCoordinatorService.sendCommand(coordinator, command);
            console.log(response);
            let devices;
            return devices;
        });
    }
}
exports.ciredDeviceService = new CiredDeviceService();
//# sourceMappingURL=CiredDeviceService.js.map