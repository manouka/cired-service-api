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
exports.installationRepository = void 0;
const InstallationModel_1 = require("../models/database/InstallationModel");
class InstallationRepository {
    create(installation) {
        return __awaiter(this, void 0, void 0, function* () {
            return InstallationModel_1.InstallationModel.create(installation);
        });
    }
    findById(id) {
        return InstallationModel_1.InstallationModel.findOne({
            where: { id: id }
        });
    }
    findAll() {
        return InstallationModel_1.InstallationModel.findAll();
    }
    findByName(name) {
        return InstallationModel_1.InstallationModel.findOne({
            where: { name: name }
        });
    }
}
exports.installationRepository = new InstallationRepository();
//# sourceMappingURL=InstallationRepository.js.map