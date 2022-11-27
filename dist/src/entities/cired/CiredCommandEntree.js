"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredCommandEntree = exports.CiredFlagTimer = exports.CiredFlagIndex = exports.CiredAddressEntreeRange = exports.CiredActionEntree = void 0;
var CiredActionEntree;
(function (CiredActionEntree) {
    CiredActionEntree["readFlagExclusiveState"] = "rFlagEx";
    CiredActionEntree["readFlagState"] = "rFlag";
    CiredActionEntree["readLoop"] = "rLoop";
    CiredActionEntree["readVersion"] = "version";
    CiredActionEntree["writeFlagExclusiveState"] = "wFlagEx";
    CiredActionEntree["writeFlagState"] = "wFlag";
})(CiredActionEntree = exports.CiredActionEntree || (exports.CiredActionEntree = {}));
exports.CiredAddressEntreeRange = Array.from(Array(224).keys()).map(x => x + 1);
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
class CiredCommandEntree {
}
exports.CiredCommandEntree = CiredCommandEntree;
//# sourceMappingURL=CiredCommandEntree.js.map