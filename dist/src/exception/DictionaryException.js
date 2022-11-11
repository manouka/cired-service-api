"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryNotFoundException = exports.DictionaryCodeException = void 0;
const HttpException_1 = require("./HttpException");
var DictionaryCodeException;
(function (DictionaryCodeException) {
    DictionaryCodeException["notFound"] = "DICTIONARY_001";
    DictionaryCodeException["entryNotFound"] = "DICTIONARY_100";
})(DictionaryCodeException = exports.DictionaryCodeException || (exports.DictionaryCodeException = {}));
class DictionaryNotFoundException extends HttpException_1.NotFoundException {
    constructor(code, message = "Dictionary not found") {
        super(code, message);
    }
}
exports.DictionaryNotFoundException = DictionaryNotFoundException;
//# sourceMappingURL=DictionaryException.js.map