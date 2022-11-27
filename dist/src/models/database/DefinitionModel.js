"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionModel = exports.ComponentType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const DictionaryModel_1 = require("./DictionaryModel");
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["ciredCommandEntree"] = 0] = "ciredCommandEntree";
    ComponentType[ComponentType["ciredCommandSortie"] = 1] = "ciredCommandSortie";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
let DefinitionModel = class DefinitionModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DefinitionModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => DictionaryModel_1.DictionaryModel, 'dictionaryId')
], DefinitionModel.prototype, "dictionary", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], DefinitionModel.prototype, "label", void 0);
DefinitionModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'T_DEFINITION' })
], DefinitionModel);
exports.DefinitionModel = DefinitionModel;
//# sourceMappingURL=DefinitionModel.js.map