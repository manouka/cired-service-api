"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ciredRgbGroup = exports.CiredDmxRgbGroupRange = exports.ciredDmxGroup = exports.CiredDmxGroupRange = exports.ciredDmxChannel = exports.CiredDmxChannelRange = exports.CiredRelay = exports.ciredTimerRange = exports.ciredFlagExclusif = exports.CiredFlag = exports.ciredDmxValueRange = exports.CiredState = exports.CiredCommandType = exports.CiredArea = exports.CiredAddressDmxRange = exports.CiredAddressSortieRange = exports.CiredAddressEntreeRange = exports.CiredAddressRange = exports.CiredAddressScanRange = exports.ciredActionDescriptor = exports.CiredActionSystem = exports.CiredActionDmx = exports.CiredActionSortie = exports.CiredActionEntree = void 0;
const Convertor_1 = require("../../tool/Convertor");
var CiredActionEntree;
(function (CiredActionEntree) {
    CiredActionEntree["readFlagExclusiveState"] = "rFlagEx";
    CiredActionEntree["readFlagState"] = "rFlag";
    CiredActionEntree["readLoop"] = "rLoop";
    CiredActionEntree["writeFlagExclusiveState"] = "wFlagEx";
    CiredActionEntree["writeFlagState"] = "wFlag";
    CiredActionEntree["readVersion"] = "version";
})(CiredActionEntree = exports.CiredActionEntree || (exports.CiredActionEntree = {}));
var CiredActionSortie;
(function (CiredActionSortie) {
    CiredActionSortie["readRelayState"] = "rRelais";
    CiredActionSortie["writeRelayState"] = "wRelais";
    CiredActionSortie["readVersion"] = "version";
})(CiredActionSortie = exports.CiredActionSortie || (exports.CiredActionSortie = {}));
var CiredActionDmx;
(function (CiredActionDmx) {
    CiredActionDmx["readVersion"] = "version";
})(CiredActionDmx = exports.CiredActionDmx || (exports.CiredActionDmx = {}));
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
exports.CiredAddressEntreeRange = Array.from(Array(224).keys()).map(i => 0 + i);
exports.CiredAddressSortieRange = Array(16).fill(0).map((_, i) => 240 + i);
exports.CiredAddressDmxRange = Array(1).fill(0).map((_, i) => 224 + i);
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
const valuesRange = Array(256).fill(0).map((_, i) => 0 + i);
exports.ciredDmxValueRange = (0, Convertor_1.getDynamicEnumaration)(valuesRange, 'value');
exports.ciredDmxValueRange.saved = 'eeprom';
exports.ciredDmxValueRange.eeprom = 'saved';
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
var ciredFlagExclusif;
(function (ciredFlagExclusif) {
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_1"] = 1] = "flag_exclusif_1";
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_2"] = 2] = "flag_exclusif_2";
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_3"] = 3] = "flag_exclusif_3";
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_4"] = 4] = "flag_exclusif_4";
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_5"] = 5] = "flag_exclusif_5";
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_6"] = 6] = "flag_exclusif_6";
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_7"] = 7] = "flag_exclusif_7";
    ciredFlagExclusif[ciredFlagExclusif["flag_exclusif_8"] = 8] = "flag_exclusif_8";
})(ciredFlagExclusif = exports.ciredFlagExclusif || (exports.ciredFlagExclusif = {}));
const timerRange = Array(255).fill(0).map((_, i) => 1 + i);
exports.ciredTimerRange = (0, Convertor_1.getDynamicEnumaration)(timerRange, 'timer');
console.log(exports.ciredTimerRange);
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
exports.CiredDmxChannelRange = Array(255).fill(0).map((_, i) => 1 + i);
exports.ciredDmxChannel = (0, Convertor_1.getDynamicEnumaration)(exports.CiredDmxChannelRange, 'channel');
exports.CiredDmxGroupRange = Array(32).fill(0).map((_, i) => 1 + i);
exports.ciredDmxGroup = (0, Convertor_1.getDynamicEnumaration)(exports.CiredDmxGroupRange, 'group');
exports.CiredDmxRgbGroupRange = Array(32).fill(0).map((_, i) => 1 + i);
exports.ciredRgbGroup = (0, Convertor_1.getDynamicEnumaration)(exports.CiredDmxRgbGroupRange, 'group_rgb');
//# sourceMappingURL=describe.js.map