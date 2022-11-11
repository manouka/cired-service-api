"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.Device = exports.DeviceInterface = exports.DeviceType = void 0;
const class_validator_1 = require("class-validator");
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["cired"] = 0] = "cired";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
class DeviceInterface {
}
exports.DeviceInterface = DeviceInterface;
class Device {
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, class_validator_1.validate)(this);
        });
    }
}
__decorate([
    (0, class_validator_1.IsInt)()
], Device.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsIP)(4)
], Device.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsInt)()
], Device.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsObject)()
], Device.prototype, "authorization", void 0);
exports.Device = Device;
//# sourceMappingURL=Device.js.map