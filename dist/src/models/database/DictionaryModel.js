"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryModel = exports.ComponentType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["ciredCommandEntree"] = 0] = "ciredCommandEntree";
    ComponentType[ComponentType["ciredCommandSortie"] = 1] = "ciredCommandSortie";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
let DictionaryModel = class DictionaryModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DictionaryModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], DictionaryModel.prototype, "name", void 0);
DictionaryModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'T_DICTIONARY' })
], DictionaryModel);
exports.DictionaryModel = DictionaryModel;
//# sourceMappingURL=DictionaryModel.js.map