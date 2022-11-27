"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredCommand = void 0;
const describe_1 = require("./describe");
const validator_1 = require("./validator");
class CiredCommand {
    constructor(action) {
        this.cmd = action;
    }
    getType() {
        return this.type;
    }
    getAddress() {
        return this.adrl;
    }
    getAction() {
        return this.cmd;
    }
    setCompleteAddress(area, address) {
        this.adrh = area;
        this.adrl = address;
        console.log(describe_1.CiredAddressEntreeRange);
        console.log(describe_1.CiredAddressEntreeRange.indexOf(this.adrl));
        this.type = describe_1.CiredAddressEntreeRange.indexOf(this.adrl) > -1 ? describe_1.CiredCommandType.entree : describe_1.CiredAddressSortieRange.indexOf(this.adrl) > -1 ? describe_1.CiredCommandType.sortie : undefined;
    }
    reset() {
        for (const property in this) {
            this[property] = undefined;
        }
    }
    validate() {
        (0, validator_1.valideCiredCommand)(this);
    }
}
exports.CiredCommand = CiredCommand;
//# sourceMappingURL=CiredCommand.js.map