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
const Controller_1 = require("../core/router/Controller");
const Method_1 = require("../core/router/Method");
const Mapper_1 = require("../tool/Mapper");
const Coordinator_1 = require("../entities/Coordinator");
const CoordinatorService_1 = require("../services/CoordinatorService");
const DeviceService_1 = require("../services/DeviceService");
let CoordinatorController = class CoordinatorController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            CoordinatorService_1.coordinatorService.upsert(yield (0, Mapper_1.entityMapper)(Coordinator_1.Coordinator, request.body)).then(() => {
                response.status(201).send();
            }).catch((error) => {
                response.status(400).send(error);
            });
        });
    }
    ;
    getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).send(yield CoordinatorService_1.coordinatorService.getAll());
        });
    }
    ;
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).send(yield CoordinatorService_1.coordinatorService.getById(parseInt(request.params.id)));
        });
    }
    ;
    updateById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            CoordinatorService_1.coordinatorService.upsert(yield (0, Mapper_1.entityMapper)(Coordinator_1.Coordinator, request.body));
            response.status(200).send();
        });
    }
    ;
    deleteById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            CoordinatorService_1.coordinatorService.deleteById(parseInt(request.params.id)).then(() => {
                response.status(201).send();
            }).catch((error) => {
                response.status(400).send(error);
            });
            response.status(200).send();
        });
    }
    ;
    getAllDevices(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let coordinator = yield CoordinatorService_1.coordinatorService.getById(parseInt(request.params.id));
            if (typeof request.query.scan != 'undefined') {
                DeviceService_1.deviceService.scanAllDevices(coordinator);
            }
            response.status(200).send(yield DeviceService_1.deviceService.getAllByCoordinatorId(coordinator.id));
        });
    }
    ;
};
__decorate([
    (0, Method_1.Post)('/')
], CoordinatorController.prototype, "create", null);
__decorate([
    (0, Method_1.Get)('/')
], CoordinatorController.prototype, "getAll", null);
__decorate([
    (0, Method_1.Get)('/:id([0-9]+)')
], CoordinatorController.prototype, "getById", null);
__decorate([
    (0, Method_1.Put)('/:id([0-9]+)')
], CoordinatorController.prototype, "updateById", null);
__decorate([
    (0, Method_1.Delete)('/:id([0-9]+)')
], CoordinatorController.prototype, "deleteById", null);
__decorate([
    (0, Method_1.Get)('/:id([0-9]+)/devices')
], CoordinatorController.prototype, "getAllDevices", null);
CoordinatorController = __decorate([
    (0, Controller_1.default)('/coordinators')
], CoordinatorController);
exports.default = CoordinatorController;
//# sourceMappingURL=CoordinatorController.js.map