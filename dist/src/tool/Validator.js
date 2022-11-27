"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValueRangedAllowed = exports.IsValueAllowed = void 0;
const IsValueAllowed = (value, valuesAllowed) => {
    return Object.values(valuesAllowed).includes(value);
};
exports.IsValueAllowed = IsValueAllowed;
const IsValueRangedAllowed = (value, min, max) => {
    return (value >= min && value <= max);
};
exports.IsValueRangedAllowed = IsValueRangedAllowed;
//# sourceMappingURL=Validator.js.map