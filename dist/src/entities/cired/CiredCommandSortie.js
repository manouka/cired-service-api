"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredRelayIndex = exports.CiredAddressSortieRange = exports.CiredActionSortie = void 0;
var CiredActionSortie;
(function (CiredActionSortie) {
    CiredActionSortie["readRelayState"] = "rRelais";
    CiredActionSortie["writeRelayState"] = "wRelais";
})(CiredActionSortie = exports.CiredActionSortie || (exports.CiredActionSortie = {}));
exports.CiredAddressSortieRange = Array(16).fill(0).map((_, i) => 240 + i);
var CiredRelayIndex;
(function (CiredRelayIndex) {
    CiredRelayIndex[CiredRelayIndex["relais_1"] = 1] = "relais_1";
    CiredRelayIndex[CiredRelayIndex["relais_2"] = 2] = "relais_2";
    CiredRelayIndex[CiredRelayIndex["relais_3"] = 3] = "relais_3";
    CiredRelayIndex[CiredRelayIndex["relais_4"] = 4] = "relais_4";
    CiredRelayIndex[CiredRelayIndex["relais_5"] = 5] = "relais_5";
    CiredRelayIndex[CiredRelayIndex["relais_6"] = 6] = "relais_6";
    CiredRelayIndex[CiredRelayIndex["relais_7"] = 7] = "relais_7";
    CiredRelayIndex[CiredRelayIndex["relais_8"] = 8] = "relais_8";
    CiredRelayIndex[CiredRelayIndex["relais_9"] = 9] = "relais_9";
    CiredRelayIndex[CiredRelayIndex["relais_10"] = 10] = "relais_10";
    CiredRelayIndex[CiredRelayIndex["relais_11"] = 11] = "relais_11";
    CiredRelayIndex[CiredRelayIndex["relais_12"] = 12] = "relais_12";
})(CiredRelayIndex = exports.CiredRelayIndex || (exports.CiredRelayIndex = {}));
//# sourceMappingURL=CiredCommandSortie.js.map