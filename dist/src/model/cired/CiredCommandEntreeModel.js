"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredCommandEntreeModel = exports.ciredCommandEntreeValidator = exports.CiredCommandEntree = exports.CiredFlagTimer = exports.CiredFlagIndex = exports.CiredFlagState = exports.CiredAddressEntree = void 0;
const exception_1 = require("../../exception");
const CiredDecorator_1 = require("../../decorator/CiredDecorator");
const CiredCommandAbstractModel_1 = require("./CiredCommandAbstractModel");
var CiredAddressEntree;
(function (CiredAddressEntree) {
    CiredAddressEntree[CiredAddressEntree["min"] = 0] = "min";
    CiredAddressEntree[CiredAddressEntree["max"] = 223] = "max";
})(CiredAddressEntree = exports.CiredAddressEntree || (exports.CiredAddressEntree = {}));
var CiredFlagState;
(function (CiredFlagState) {
    CiredFlagState[CiredFlagState["set"] = 0] = "set";
    CiredFlagState[CiredFlagState["clear"] = 1] = "clear";
    CiredFlagState[CiredFlagState["toggle"] = 2] = "toggle";
})(CiredFlagState = exports.CiredFlagState || (exports.CiredFlagState = {}));
var CiredFlagIndex;
(function (CiredFlagIndex) {
    CiredFlagIndex[CiredFlagIndex["flag_1"] = 1] = "flag_1";
    CiredFlagIndex[CiredFlagIndex["flag_2"] = 2] = "flag_2";
    CiredFlagIndex[CiredFlagIndex["flag_3"] = 3] = "flag_3";
    CiredFlagIndex[CiredFlagIndex["flag_4"] = 4] = "flag_4";
    CiredFlagIndex[CiredFlagIndex["flag_5"] = 5] = "flag_5";
    CiredFlagIndex[CiredFlagIndex["flag_6"] = 6] = "flag_6";
    CiredFlagIndex[CiredFlagIndex["flag_7"] = 7] = "flag_7";
    CiredFlagIndex[CiredFlagIndex["flag_8"] = 8] = "flag_8";
})(CiredFlagIndex = exports.CiredFlagIndex || (exports.CiredFlagIndex = {}));
var CiredFlagTimer;
(function (CiredFlagTimer) {
    CiredFlagTimer[CiredFlagTimer["min"] = 1] = "min";
    CiredFlagTimer[CiredFlagTimer["max"] = 255] = "max";
})(CiredFlagTimer = exports.CiredFlagTimer || (exports.CiredFlagTimer = {}));
var CiredCommandEntree;
(function (CiredCommandEntree) {
    CiredCommandEntree["readFlagExclusiveState"] = "rFlagEx";
    CiredCommandEntree["readFlagState"] = "rFlag";
    CiredCommandEntree["readLoop"] = "rLoop";
    CiredCommandEntree["readVersion"] = "version";
    CiredCommandEntree["writeFlagExclusiveState"] = "wFlagEx";
    CiredCommandEntree["writeFlagState"] = "wFlag";
})(CiredCommandEntree = exports.CiredCommandEntree || (exports.CiredCommandEntree = {}));
exports.ciredCommandEntreeValidator = {
    writeFlagState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex', 'flagState']),
    writeFlagExclusiveState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex']),
    readFlagState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex']),
    readFlagExclusiveState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex']),
    readLoop: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command']),
    readVersion: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command']),
};
class CiredCommandEntreeModel extends CiredCommandAbstractModel_1.CiredCommandAbstractModel {
    checkPropertiesCorrectySetted(propertiesName) {
        propertiesName.map((property) => {
            if (!Reflect.hasMetadata(property, CiredCommandEntreeModel)) {
                throw new exception_1.CiredCommandException(exception_1.CiredCommandException.command_entree_not_valid, `Property ${property} required for command ${this.command}`);
            }
        });
    }
    transform() {
        let ciredCommandRaw = {
            type: 'entree',
            adrh: this.area,
            adrl: this.address,
            cmd: this.command,
            flag: this.flagIndex,
            etat: this.flagState,
            temps: this.flagTimer
        };
        return ciredCommandRaw;
    }
}
__decorate([
    (0, CiredDecorator_1.IsCiredValuePropertyAllowed)(CiredCommandAbstractModel_1.CiredArea)
], CiredCommandEntreeModel.prototype, "area", void 0);
__decorate([
    (0, CiredDecorator_1.IsCiredValuePropertyRangedAllowed)(CiredAddressEntree.min, CiredAddressEntree.max)
], CiredCommandEntreeModel.prototype, "address", void 0);
__decorate([
    (0, CiredDecorator_1.IsCiredValuePropertyAllowed)(CiredCommandEntree)
], CiredCommandEntreeModel.prototype, "command", void 0);
__decorate([
    (0, CiredDecorator_1.IsCiredValuePropertyAllowed)(CiredFlagIndex)
], CiredCommandEntreeModel.prototype, "flagIndex", void 0);
__decorate([
    (0, CiredDecorator_1.IsCiredValuePropertyAllowed)(CiredFlagState)
], CiredCommandEntreeModel.prototype, "flagState", void 0);
__decorate([
    (0, CiredDecorator_1.IsCiredValuePropertyRangedAllowed)(CiredFlagTimer.min, CiredFlagTimer.max)
], CiredCommandEntreeModel.prototype, "flagTimer", void 0);
exports.CiredCommandEntreeModel = CiredCommandEntreeModel;
//# sourceMappingURL=CiredCommandEntreeModel.js.map