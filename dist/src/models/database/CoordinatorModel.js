"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinatorModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const ComponentModel_1 = require("./ComponentModel");
const InstallationModel_1 = require("./InstallationModel");
let CoordinatorModel = class CoordinatorModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], CoordinatorModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => InstallationModel_1.InstallationModel),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], CoordinatorModel.prototype, "installationId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], CoordinatorModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], CoordinatorModel.prototype, "host", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], CoordinatorModel.prototype, "port", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        set(value) { value ? this.setDataValue('authorization', JSON.stringify(value)) : null; },
        get() { const rawValue = this.getDataValue('authorization'); return rawValue ? JSON.parse(rawValue) : null; }
    })
], CoordinatorModel.prototype, "authorization", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(1024),
        set(value) { value ? this.setDataValue('externalInformation', JSON.stringify(value)) : null; },
        get() { const rawValue = this.getDataValue('externalInformation'); return rawValue ? JSON.parse(rawValue) : null; }
    })
], CoordinatorModel.prototype, "externalInformation", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => InstallationModel_1.InstallationModel)
], CoordinatorModel.prototype, "installation", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ComponentModel_1.ComponentModel)
], CoordinatorModel.prototype, "components", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], CoordinatorModel.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], CoordinatorModel.prototype, "updatedOn", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt
], CoordinatorModel.prototype, "deletionDate", void 0);
CoordinatorModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'T_COORDINATOR' })
], CoordinatorModel);
exports.CoordinatorModel = CoordinatorModel;
//# sourceMappingURL=CoordinatorModel.js.map