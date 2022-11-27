"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const CoordinatorModel_1 = require("./CoordinatorModel");
let DeviceModel = class DeviceModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DeviceModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => CoordinatorModel_1.CoordinatorModel),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DeviceModel.prototype, "coordinatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], DeviceModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], DeviceModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(1024),
        set(value) { value ? this.setDataValue('information', JSON.stringify(value)) : null; },
        get() { const rawValue = this.getDataValue('information'); return rawValue ? JSON.parse(rawValue) : null; }
    })
], DeviceModel.prototype, "information", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => CoordinatorModel_1.CoordinatorModel)
], DeviceModel.prototype, "coordinator", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], DeviceModel.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], DeviceModel.prototype, "updatedOn", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt
], DeviceModel.prototype, "deletionDate", void 0);
DeviceModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'T_DEVICE' })
], DeviceModel);
exports.DeviceModel = DeviceModel;
//# sourceMappingURL=DeviceModel.js.map