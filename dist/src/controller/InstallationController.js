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
const Installation_1 = require("../entities/Installation");
const Mapper_1 = require("../tool/Mapper");
const InstallationService_1 = require("../services/InstallationService");
const CoordinatorService_1 = require("../services/CoordinatorService");
let InstallationController = class InstallationController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let installation = yield (0, Mapper_1.entityMapper)(Installation_1.Installation, request.body);
            InstallationService_1.installationService.create(installation);
            response.status(201).send();
        });
    }
    ;
    getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).send(yield InstallationService_1.installationService.getAll());
        });
    }
    ;
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).send(yield InstallationService_1.installationService.getById(parseInt(request.params.installationId)));
        });
    }
    ;
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let installation = yield (0, Mapper_1.entityMapper)(Installation_1.Installation, request.body);
            installation.id = parseInt(request.params.installationId);
            InstallationService_1.installationService.update(installation);
            response.status(200).send();
        });
    }
    ;
    getAllCoordinator(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).send(yield CoordinatorService_1.coordinatorService.getAllByInstallationId(parseInt(request.params.installationId)));
        });
    }
    ;
    addCoordinator(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            CoordinatorService_1.coordinatorService.assignToInstallation(parseInt(request.params.installationId), parseInt(request.params.coordinatorId));
            response.status(200).send();
        });
    }
    ;
};
__decorate([
    (0, Method_1.Post)('/')
], InstallationController.prototype, "create", null);
__decorate([
    (0, Method_1.Get)('/')
], InstallationController.prototype, "getAll", null);
__decorate([
    (0, Method_1.Get)('/:installationId([0-9]+)')
], InstallationController.prototype, "getById", null);
__decorate([
    (0, Method_1.Patch)('/:installationId([0-9]+)')
], InstallationController.prototype, "update", null);
__decorate([
    (0, Method_1.Get)('/:installationId([0-9]+)/coordinators')
], InstallationController.prototype, "getAllCoordinator", null);
__decorate([
    (0, Method_1.Patch)('/:installationId([0-9]+)/coordinators/:coordinatorId([0-9]+)')
], InstallationController.prototype, "addCoordinator", null);
InstallationController = __decorate([
    (0, Controller_1.default)('/installation')
], InstallationController);
exports.default = InstallationController;
//# sourceMappingURL=InstallationController.js.map