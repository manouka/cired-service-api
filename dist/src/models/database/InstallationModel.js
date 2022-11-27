"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallationModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const CoordinatorModel_1 = require("./CoordinatorModel");
let InstallationModel = class InstallationModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], InstallationModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], InstallationModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CoordinatorModel_1.CoordinatorModel)
], InstallationModel.prototype, "coordinators", void 0);
InstallationModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'T_INSTALLATION' })
], InstallationModel);
exports.InstallationModel = InstallationModel;
//# sourceMappingURL=InstallationModel.js.map