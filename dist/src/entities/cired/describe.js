"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredRelay = exports.CiredFlagTimer = exports.CiredFlag = exports.CiredState = exports.CiredCommandType = exports.CiredArea = exports.CiredAddressSortieRange = exports.CiredAddressEntreeRange = exports.CiredAddressRange = exports.CiredAddressScanRange = exports.ciredActionDescriptor = exports.CiredActionSystem = exports.CiredActionSortie = exports.CiredActionEntree = void 0;
var CiredActionEntree;
(function (CiredActionEntree) {
    CiredActionEntree["readFlagExclusiveState"] = "rFlagEx";
    CiredActionEntree["readFlagState"] = "rFlag";
    CiredActionEntree["readLoop"] = "rLoop";
    CiredActionEntree["writeFlagExclusiveState"] = "wFlagEx";
    CiredActionEntree["writeFlagState"] = "wFlag";
})(CiredActionEntree = exports.CiredActionEntree || (exports.CiredActionEntree = {}));
var CiredActionSortie;
(function (CiredActionSortie) {
    CiredActionSortie["readRelayState"] = "rRelais";
    CiredActionSortie["writeRelayState"] = "wRelais";
})(CiredActionSortie = exports.CiredActionSortie || (exports.CiredActionSortie = {}));
var CiredActionSystem;
(function (CiredActionSystem) {
    CiredActionSystem["readVersion"] = "version";
})(CiredActionSystem = exports.CiredActionSystem || (exports.CiredActionSystem = {}));
exports.ciredActionDescriptor = new Map([
    [CiredActionEntree.readFlagExclusiveState, []],
    [CiredActionEntree.readFlagState, ['flag']],
    [CiredActionEntree.readLoop, []],
    [CiredActionEntree.writeFlagExclusiveState, ['flag']],
    [CiredActionEntree.writeFlagState, ['flag', 'etat', 'temps']],
    [CiredActionSortie.readRelayState, ['relais']],
    [CiredActionSortie.writeRelayState, ['relais', 'etat']],
    [CiredActionSystem.readVersion, []],
]);
exports.CiredAddressScanRange = [...Array.from(Array(14).keys()).map(i => (0 + i) * 16), 224, ...Array.from(Array(16).keys()).map(i => 240 + i)];
exports.CiredAddressRange = [...Array.from(Array(224).keys()).map(i => 0 + i), 224, ...Array.from(Array(16).keys()).map(i => 240 + i)];
exports.CiredAddressEntreeRange = Array.from(Array(224).keys()).map(i => i + 1);
exports.CiredAddressSortieRange = Array(16).fill(0).map((_, i) => 240 + i);
var CiredArea;
(function (CiredArea) {
    CiredArea[CiredArea["area_1"] = 240] = "area_1";
    CiredArea[CiredArea["area_2"] = 240] = "area_2";
    CiredArea[CiredArea["area_3"] = 240] = "area_3";
    CiredArea[CiredArea["area_4"] = 240] = "area_4";
})(CiredArea = exports.CiredArea || (exports.CiredArea = {}));
var CiredCommandType;
(function (CiredCommandType) {
    CiredCommandType["entree"] = "entree";
    CiredCommandType["sortie"] = "sortie";
    CiredCommandType["dmx"] = "dmx";
    CiredCommandType["systeme"] = "systeme";
    CiredCommandType["gsm"] = "gsm";
})(CiredCommandType = exports.CiredCommandType || (exports.CiredCommandType = {}));
var CiredState;
(function (CiredState) {
    CiredState[CiredState["set"] = 0] = "set";
    CiredState[CiredState["clear"] = 1] = "clear";
    CiredState[CiredState["toggle"] = 2] = "toggle";
})(CiredState = exports.CiredState || (exports.CiredState = {}));
var CiredFlag;
(function (CiredFlag) {
    CiredFlag[CiredFlag["flag_1"] = 1] = "flag_1";
    CiredFlag[CiredFlag["flag_2"] = 2] = "flag_2";
    CiredFlag[CiredFlag["flag_3"] = 3] = "flag_3";
    CiredFlag[CiredFlag["flag_4"] = 4] = "flag_4";
    CiredFlag[CiredFlag["flag_5"] = 5] = "flag_5";
    CiredFlag[CiredFlag["flag_6"] = 6] = "flag_6";
    CiredFlag[CiredFlag["flag_7"] = 7] = "flag_7";
    CiredFlag[CiredFlag["flag_8"] = 8] = "flag_8";
})(CiredFlag = exports.CiredFlag || (exports.CiredFlag = {}));
var CiredFlagTimer;
(function (CiredFlagTimer) {
    CiredFlagTimer[CiredFlagTimer["min"] = 1] = "min";
    CiredFlagTimer[CiredFlagTimer["max"] = 255] = "max";
})(CiredFlagTimer = exports.CiredFlagTimer || (exports.CiredFlagTimer = {}));
var CiredRelay;
(function (CiredRelay) {
    CiredRelay[CiredRelay["relais_1"] = 1] = "relais_1";
    CiredRelay[CiredRelay["relais_2"] = 2] = "relais_2";
    CiredRelay[CiredRelay["relais_3"] = 3] = "relais_3";
    CiredRelay[CiredRelay["relais_4"] = 4] = "relais_4";
    CiredRelay[CiredRelay["relais_5"] = 5] = "relais_5";
    CiredRelay[CiredRelay["relais_6"] = 6] = "relais_6";
    CiredRelay[CiredRelay["relais_7"] = 7] = "relais_7";
    CiredRelay[CiredRelay["relais_8"] = 8] = "relais_8";
    CiredRelay[CiredRelay["relais_9"] = 9] = "relais_9";
    CiredRelay[CiredRelay["relais_10"] = 10] = "relais_10";
    CiredRelay[CiredRelay["relais_11"] = 11] = "relais_11";
    CiredRelay[CiredRelay["relais_12"] = 12] = "relais_12";
})(CiredRelay = exports.CiredRelay || (exports.CiredRelay = {}));
//# sourceMappingURL=describe.js.map