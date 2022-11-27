"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinator = exports.CoordinatorType = void 0;
const class_validator_1 = require("class-validator");
var CoordinatorType;
(function (CoordinatorType) {
    CoordinatorType["ciredGateway"] = "cired_gateway";
    CoordinatorType["ciredGatewayGsm"] = "cired_gateway_gsm";
    CoordinatorType["openhab"] = "openhab";
})(CoordinatorType = exports.CoordinatorType || (exports.CoordinatorType = {}));
class Coordinator {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], Coordinator.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], Coordinator.prototype, "installationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(CoordinatorType),
    (0, class_validator_1.IsString)()
], Coordinator.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsUrl)()
], Coordinator.prototype, "host", void 0);
__decorate([
    (0, class_validator_1.IsPort)(),
    (0, class_validator_1.IsOptional)()
], Coordinator.prototype, "port", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)()
], Coordinator.prototype, "authorization", void 0);
__decorate([
    (0, class_validator_1.IsOptional)()
], Coordinator.prototype, "externalInformation", void 0);
exports.Coordinator = Coordinator;
//# sourceMappingURL=Coordinator.js.map