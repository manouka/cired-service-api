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
exports.coordinatorService = void 0;
const InstallationService_1 = require("./InstallationService");
const CoordinatorRepository_1 = require("../repositories/CoordinatorRepository");
const CiredCoordinatorService_1 = require("./cired/CiredCoordinatorService");
const CoordinatorExceptions_1 = require("../exceptions/CoordinatorExceptions");
class CoordinatorService {
    upsert(coordinator, checkExistance = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (checkExistance) {
                coordinator = yield this.checkExistance(coordinator);
            }
            let coordinatorModel = coordinator.id ? yield this.getById(coordinator.id) : yield CoordinatorRepository_1.coordinatorRepository.create(coordinator);
            Object.assign(coordinatorModel, coordinator);
            yield coordinatorModel.save();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let coordinator = yield CoordinatorRepository_1.coordinatorRepository.findById(id);
            if (!coordinator) {
                throw new CoordinatorExceptions_1.CoordinatorException(CoordinatorExceptions_1.CoordinatorException.notFound, `Coordinator id ${id} not found`);
            }
            return coordinator;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CoordinatorRepository_1.coordinatorRepository.findAll();
        });
    }
    getAllByInstallationId(installationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let coordinators = yield CoordinatorRepository_1.coordinatorRepository.findByInstallationId(installationId);
            if (!coordinators) {
                throw new CoordinatorExceptions_1.CoordinatorException(CoordinatorExceptions_1.CoordinatorException.notFound, `Not Coordinator found in installation ${installationId}`);
            }
            return coordinators;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let coordinator = yield this.getById(id);
            coordinator.destroy();
        });
    }
    assignToInstallation(installationId, coordinatorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let promise = [];
            promise.push(InstallationService_1.installationService.getById(installationId));
            promise.push(this.getById(coordinatorId));
            let [installationModel, coordinatorModel] = yield Promise.all(promise);
            yield Promise.all([installationModel, coordinatorModel]);
            coordinatorModel.$set('installation', installationModel);
            yield coordinatorModel.save();
        });
    }
    checkExistance(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.requestInformation(coordinator);
            }
            catch (error) {
                throw new CoordinatorExceptions_1.CoordinatorException(CoordinatorExceptions_1.CoordinatorException.noReply, `Coordinator ${coordinator.host} don't respond`);
            }
        });
    }
    requestInformation(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            return CiredCoordinatorService_1.ciredCoordinatorService.requestInformation(coordinator);
        });
    }
}
exports.coordinatorService = new CoordinatorService();
//# sourceMappingURL=CoordinatorService.js.map