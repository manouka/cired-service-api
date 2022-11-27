"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmDecoratorException = exports.OrmException = void 0;
class OrmException extends Error {
    constructor(status, code, message) {
        super(message);
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
exports.OrmException = OrmException;
class OrmDecoratorException extends OrmException {
    constructor(code, message = "Orm decorator error") {
        super(400, code.errorCode, message);
    }
}
exports.OrmDecoratorException = OrmDecoratorException;
OrmDecoratorException.modelAlreadyDefine = { errorCode: 'ORM_100' };
OrmDecoratorException.entityAlreadyDefine = { errorCode: 'ORM_101' };
OrmDecoratorException.properyAlreadyDefine = { errorCode: 'ORM_102' };
//# sourceMappingURL=OrmException.js.map