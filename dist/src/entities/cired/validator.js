"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiredCommandValidator = exports.valideCiredCommand = void 0;
const Validator_1 = require("../../tool/Validator");
const exceptions_1 = require("../../exceptions");
const describe_1 = require("./describe");
const valideCiredCommand = (command) => {
    CiredCommandValidator.type(command);
    CiredCommandValidator.address(command);
    CiredCommandValidator.cmd(command);
    CiredCommandValidator.flag(command);
    CiredCommandValidator.relais(command);
    CiredCommandValidator.etat(command);
};
exports.valideCiredCommand = valideCiredCommand;
class CiredCommandValidator {
    static address(command) {
        let type = command.getType();
        let addressRange = type == describe_1.CiredCommandType.entree ? describe_1.CiredAddressEntreeRange :
            type == describe_1.CiredCommandType.sortie ? describe_1.CiredAddressSortieRange :
                type == describe_1.CiredCommandType.dmx ? describe_1.CiredAddressDmxRange :
                    [];
        if (!addressRange.includes(command.getAddress())) {
            throw new exceptions_1.CiredAddressException(exceptions_1.CiredAddressException.addressNotAllowed, `Cired address ${command.getAddress()} is not allowed`);
        }
    }
    static type(command) {
        if (!(0, Validator_1.IsValueAllowed)(command.getType(), describe_1.CiredCommandType)) {
            throw new exceptions_1.CiredTypeException(exceptions_1.CiredTypeException.notAllowed, `Cired type ${command.getType()} is not allowed`);
        }
    }
    static cmd(command) {
        CiredCommandValidator.type(command);
        let type = command.getType();
        let actionAllowed = type == describe_1.CiredCommandType.entree ? describe_1.CiredActionEntree :
            type == describe_1.CiredCommandType.sortie ? describe_1.CiredActionSortie :
                type == describe_1.CiredCommandType.dmx ? describe_1.CiredActionDmx :
                    [];
        if (!(0, Validator_1.IsValueAllowed)(command.getAction(), actionAllowed)) {
            throw new exceptions_1.CiredActionException(exceptions_1.CiredActionException.notAllowed, `Cired command ${command.getAction()} is not allowed for command type ${command.getType()}`);
        }
    }
    static flag(command) {
        if (!command.flag) {
            return;
        }
        CiredCommandValidator.type(command);
        CiredCommandValidator.cmd(command);
        CiredCommandValidator.checkActionArgument(command, 'flag');
        if (!(0, Validator_1.IsValueAllowed)(command.flag, describe_1.CiredFlag)) {
            throw new exceptions_1.CiredFlagException(exceptions_1.CiredFlagException.notAllowed, `Flag ${command.flag} is not allowed`);
        }
    }
    static etat(command) {
        if (!command.etat) {
            return;
        }
        CiredCommandValidator.type(command);
        CiredCommandValidator.cmd(command);
        CiredCommandValidator.checkActionArgument(command, 'etat');
        if (!(0, Validator_1.IsValueAllowed)(command.etat, describe_1.CiredState)) {
            throw new exceptions_1.CiredStateException(exceptions_1.CiredStateException.notAllowed, `State ${command.etat} is not allowed`);
        }
    }
    static relais(command) {
        if (!command.relais) {
            return;
        }
        CiredCommandValidator.type(command);
        CiredCommandValidator.cmd(command);
        CiredCommandValidator.checkActionArgument(command, 'relais');
        if (!(0, Validator_1.IsValueAllowed)(command.relais, describe_1.CiredFlag)) {
            throw new exceptions_1.CiredRelayException(exceptions_1.CiredRelayException.notAllowed, `Relay ${command.relais} is not allowed`);
        }
    }
    static checkActionArgument(command, argument) {
        if (!describe_1.ciredActionDescriptor.has(command.getAction())) {
            throw new exceptions_1.CiredActionException(exceptions_1.CiredActionException.notDescribed, `Action ${command.getAction()} not described`);
        }
        let actionDescribes = describe_1.ciredActionDescriptor.get(command.getAction());
        if (!actionDescribes.includes(argument)) {
            throw new exceptions_1.CiredActionException(exceptions_1.CiredActionException.argumentNotAllowed, `Argument ${argument} not allowed for action ${command.getAction()}`);
        }
    }
}
exports.CiredCommandValidator = CiredCommandValidator;
//# sourceMappingURL=validator.js.map