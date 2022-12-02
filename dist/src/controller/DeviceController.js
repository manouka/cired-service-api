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
const DeviceService_1 = require("../services/DeviceService");
const Controller_1 = require("../core/router/Controller");
const Method_1 = require("../core/router/Method");
let DeviceController = class DeviceController {
    getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).send(yield DeviceService_1.deviceService.getAll());
        });
    }
    ;
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).send(yield DeviceService_1.deviceService.getById(parseInt(request.params.deviceId)));
        });
    }
    ;
};
__decorate([
    (0, Method_1.Get)('/')
], DeviceController.prototype, "getAll", null);
__decorate([
    (0, Method_1.Get)('/:deviceId([0-9]+)')
], DeviceController.prototype, "getById", null);
DeviceController = __decorate([
    (0, Controller_1.default)('/devices')
], DeviceController);
exports.default = DeviceController;
//# sourceMappingURL=DeviceController.js.map