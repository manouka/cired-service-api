"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredCommandAbstractModel = exports.CiredArea = void 0;
const sequelize_1 = require("sequelize");
var CiredArea;
(function (CiredArea) {
    CiredArea[CiredArea["area_1"] = 0] = "area_1";
    CiredArea[CiredArea["area_2"] = 1] = "area_2";
    CiredArea[CiredArea["area_3"] = 2] = "area_3";
    CiredArea[CiredArea["area_4"] = 3] = "area_4";
})(CiredArea = exports.CiredArea || (exports.CiredArea = {}));
class CiredCommandAbstractModel extends sequelize_1.Model {
}
exports.CiredCommandAbstractModel = CiredCommandAbstractModel;
//# sourceMappingURL=CiredCommandAbstract.model.js.map