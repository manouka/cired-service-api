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
exports.coordinatorRepository = void 0;
const CoordinatorModel_1 = require("../models/database/CoordinatorModel");
class CoordinatorRepository {
    create(coordinator) {
        return __awaiter(this, void 0, void 0, function* () {
            const [coordinatorModel, created] = yield CoordinatorModel_1.CoordinatorModel.findOrCreate({
                where: { host: coordinator.host },
                defaults: coordinator
            });
            return coordinatorModel;
        });
    }
    findById(id) {
        return CoordinatorModel_1.CoordinatorModel.findByPk(id);
    }
    findAll() {
        return CoordinatorModel_1.CoordinatorModel.findAll();
    }
    findAllByInstallationId(installationId) {
        return CoordinatorModel_1.CoordinatorModel.findAll({ where: { installationId: installationId } });
    }
}
exports.coordinatorRepository = new CoordinatorRepository();
//# sourceMappingURL=CoordinatorRepository.js.map