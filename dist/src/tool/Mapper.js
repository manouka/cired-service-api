"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityMapper = void 0;
const class_validator_1 = require("class-validator");
const exceptions_1 = require("../exceptions");
const entityMapper = (entity, json) => __awaiter(void 0, void 0, void 0, function* () {
    let instance = new entity();
    Object.keys(json).forEach((key) => {
        instance[key] = json[key];
    });
    let errors = yield (0, class_validator_1.validate)(instance, { stopAtFirstError: true });
    if (errors.length > 0) {
        let message = Object.keys(errors[0].constraints).map((constraintIndex) => {
            return errors[0].constraints[constraintIndex];
        }).join(' - ');
        throw new exceptions_1.ParameterException(exceptions_1.ParameterException.validator, message);
    }
    return instance;
});
exports.entityMapper = entityMapper;
//# sourceMappingURL=Mapper.js.map