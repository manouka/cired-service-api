"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementModel = exports.ElementType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const ComponentModel_1 = require("./ComponentModel");
class ElementType {
}
exports.ElementType = ElementType;
let ElementModel = class ElementModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ElementModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ComponentModel_1.ComponentModel),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ElementModel.prototype, "componentId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], ElementModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ElementModel.prototype, "allias", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ComponentModel_1.ComponentModel, 'componentId')
], ElementModel.prototype, "component", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], ElementModel.prototype, "information", void 0);
ElementModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'T_ELEMENT' })
], ElementModel);
exports.ElementModel = ElementModel;
//# sourceMappingURL=ElementModel.js.map