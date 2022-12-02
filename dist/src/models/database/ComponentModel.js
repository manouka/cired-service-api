"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const DeviceModel_1 = require("./DeviceModel");
const ElementModel_1 = require("./ElementModel");
let ComponentModel = class ComponentModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ComponentModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => DeviceModel_1.DeviceModel),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ComponentModel.prototype, "deviceId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ComponentModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ComponentModel.prototype, "index", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ComponentModel.prototype, "alias", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ComponentModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => DeviceModel_1.DeviceModel, 'deviceId')
], ComponentModel.prototype, "device", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ElementModel_1.ElementModel)
], ComponentModel.prototype, "elements", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(1024),
        set(value) { value ? this.setDataValue('information', JSON.stringify(value)) : null; },
        get() { const rawValue = this.getDataValue('information'); return rawValue ? JSON.parse(rawValue) : null; }
    })
], ComponentModel.prototype, "information", void 0);
ComponentModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'T_COMPONENT' })
], ComponentModel);
exports.ComponentModel = ComponentModel;
//# sourceMappingURL=ComponentModel.js.map