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
exports.installationService = void 0;
const exceptions_1 = require("../exceptions");
const InstallationRepository_1 = require("../repositories/InstallationRepository");
class InstallationService {
    create(installation) {
        return __awaiter(this, void 0, void 0, function* () {
            let installationSearch = yield InstallationRepository_1.installationRepository.findByName(installation.name);
            if (installationSearch) {
                throw new exceptions_1.InstallationException(exceptions_1.InstallationException.alreadyExist, `Installation name ${installation.name} already exist`);
            }
            return InstallationRepository_1.installationRepository.create(installation);
        });
    }
    update(installation) {
        return __awaiter(this, void 0, void 0, function* () {
            let installationSearch = yield InstallationRepository_1.installationRepository.findByName(installation.name);
            if (installationSearch && installationSearch.id != installation.id) {
                throw new exceptions_1.InstallationException(exceptions_1.InstallationException.alreadyExist, `Installation name ${installation.name} already exist`);
            }
            installationSearch = yield this.getById(installation.id);
            Object.assign(installationSearch, installation);
            return installationSearch.save();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let installation = yield InstallationRepository_1.installationRepository.findById(id);
            if (!installation) {
                throw new exceptions_1.InstallationException(exceptions_1.InstallationException.notFound, `Installation id ${id} not found`);
            }
            return installation;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let installations = yield InstallationRepository_1.installationRepository.findAll();
            if (!installations) {
                throw new exceptions_1.InstallationException(exceptions_1.InstallationException.notFound, `No installation found`);
            }
            return installations;
        });
    }
}
exports.installationService = new InstallationService();
//# sourceMappingURL=InstallationService.js.map