
export class OrmException extends Error {

    status: number;
    code: string;
    message: string;

    constructor(status: number, code: string, message: string) {

        super(message);
        this.status = status;
        this.code = code;
        this.message = message;
    }
}

type OrmCodeException = { errorCode: string, message?: string }

/**
 * 
 */
 export class OrmDecoratorException extends OrmException {

    static readonly modelAlreadyDefine: OrmCodeException = { errorCode : 'ORM_100' };
    static readonly properyAlreadyDefine: OrmCodeException = { errorCode : 'ORM_100' };

    constructor(code: OrmCodeException, message: string = "Orm decorator error") {
        super(400, code.errorCode, message);
    }
}

