"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredCommandSortieModel = exports.CiredCommandSortie = exports.CiredRelayIndex = exports.CiredRelayState = exports.CiredAddressSortie = void 0;
const CiredCommandAbstract_model_1 = require("./CiredCommandAbstract.model");
var CiredAddressSortie;
(function (CiredAddressSortie) {
    CiredAddressSortie[CiredAddressSortie["adr_0xf0"] = 240] = "adr_0xf0";
    CiredAddressSortie[CiredAddressSortie["adr_0xf1"] = 241] = "adr_0xf1";
    CiredAddressSortie[CiredAddressSortie["adr_0xf2"] = 242] = "adr_0xf2";
    CiredAddressSortie[CiredAddressSortie["adr_0xf3"] = 243] = "adr_0xf3";
    CiredAddressSortie[CiredAddressSortie["adr_0xf4"] = 244] = "adr_0xf4";
    CiredAddressSortie[CiredAddressSortie["adr_0xf5"] = 245] = "adr_0xf5";
    CiredAddressSortie[CiredAddressSortie["adr_0xf6"] = 246] = "adr_0xf6";
    CiredAddressSortie[CiredAddressSortie["adr_0xf7"] = 247] = "adr_0xf7";
    CiredAddressSortie[CiredAddressSortie["adr_0xf8"] = 248] = "adr_0xf8";
    CiredAddressSortie[CiredAddressSortie["adr_0xf9"] = 249] = "adr_0xf9";
    CiredAddressSortie[CiredAddressSortie["adr_0xfa"] = 250] = "adr_0xfa";
    CiredAddressSortie[CiredAddressSortie["adr_0xfb"] = 251] = "adr_0xfb";
    CiredAddressSortie[CiredAddressSortie["adr_0xfc"] = 252] = "adr_0xfc";
    CiredAddressSortie[CiredAddressSortie["adr_0xfd"] = 253] = "adr_0xfd";
    CiredAddressSortie[CiredAddressSortie["adr_0xfe"] = 254] = "adr_0xfe";
    CiredAddressSortie[CiredAddressSortie["adr_0xff"] = 255] = "adr_0xff";
})(CiredAddressSortie = exports.CiredAddressSortie || (exports.CiredAddressSortie = {}));
var CiredRelayState;
(function (CiredRelayState) {
    CiredRelayState[CiredRelayState["set"] = 0] = "set";
    CiredRelayState[CiredRelayState["clear"] = 1] = "clear";
    CiredRelayState[CiredRelayState["toggle"] = 2] = "toggle";
})(CiredRelayState = exports.CiredRelayState || (exports.CiredRelayState = {}));
var CiredRelayIndex;
(function (CiredRelayIndex) {
    CiredRelayIndex[CiredRelayIndex["relay_1"] = 1] = "relay_1";
    CiredRelayIndex[CiredRelayIndex["relay_2"] = 2] = "relay_2";
    CiredRelayIndex[CiredRelayIndex["relay_3"] = 3] = "relay_3";
    CiredRelayIndex[CiredRelayIndex["relay_4"] = 4] = "relay_4";
    CiredRelayIndex[CiredRelayIndex["relay_5"] = 5] = "relay_5";
    CiredRelayIndex[CiredRelayIndex["relay_6"] = 6] = "relay_6";
    CiredRelayIndex[CiredRelayIndex["relay_7"] = 7] = "relay_7";
    CiredRelayIndex[CiredRelayIndex["relay_8"] = 8] = "relay_8";
    CiredRelayIndex[CiredRelayIndex["relay_9"] = 9] = "relay_9";
    CiredRelayIndex[CiredRelayIndex["relay_10"] = 10] = "relay_10";
    CiredRelayIndex[CiredRelayIndex["relay_11"] = 11] = "relay_11";
    CiredRelayIndex[CiredRelayIndex["relay_12"] = 12] = "relay_12";
})(CiredRelayIndex = exports.CiredRelayIndex || (exports.CiredRelayIndex = {}));
var CiredCommandSortie;
(function (CiredCommandSortie) {
    CiredCommandSortie["writeRelayState"] = "wRelais";
    CiredCommandSortie["readRelayState"] = "rRelais";
    CiredCommandSortie["readVersion"] = "version";
})(CiredCommandSortie = exports.CiredCommandSortie || (exports.CiredCommandSortie = {}));
class CiredCommandSortieModel extends CiredCommandAbstract_model_1.CiredCommandAbstractModel {
}
exports.CiredCommandSortieModel = CiredCommandSortieModel;
//# sourceMappingURL=CiredCommandSortie.model.js.map