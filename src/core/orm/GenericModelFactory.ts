
import { DataType, Model, Sequelize } from 'sequelize';
import "reflect-metadata";
import { baseTest } from '../../../parameter/config';
import { OrmModelDefinition } from './OrmType';

/**
 * 
 */
export class GenericModel extends Model {

}

/**
 * 
 */
export class GenericModelFactory {

    private sequelize: Sequelize;

    public constructor() {

        let dbOptions: any = baseTest;

        dbOptions.pool = {
            max: 10,
            min: 0,
            acquire: 60000,
            idle: 10000,
            evict: 60000
        };

        this.sequelize = new Sequelize(baseTest.database, baseTest.username, baseTest.password, dbOptions);
        this.sequelize.sync({ force: true });
    }

    /**
     * 
     * @param type 
     */
    public create<T>(type: (new () => T)) {


        let modelDefinition: OrmModelDefinition = Reflect.getMetadata('orm:model', type);

        let ModelGeneric: any = type;

        let sequelize = this.sequelize;

        ModelGeneric.init(this.getAttribute(type), { sequelize, modelName: modelDefinition.modelName, tableName: modelDefinition.tableName, timestamps: false })

    }

    private getAttribute<T>(type: T) {
        let regexAttribute = new RegExp('^orm:attribute:([a-zA-Z0-9]+)$');
        let attributes: any = {};

        Reflect.getMetadataKeys(type).map((key) => {

            if (!regexAttribute.test(key)) {
                return;
            }

            let property = key.match(regexAttribute)[1];
            attributes = { ...{ [property]: Reflect.getMetadata(key, type) } }


        })

        return attributes;
    }
}

export const genericModelFactory = new GenericModelFactory();


/*
private typeToContraintValidatorRecord: Record<ColumnClassType, ConstraintsToValidatorsRecord> = {
    string: this.stringConstraintsToValidatorsRecord,
    number: this.numberConstraintsToValidatorsRecord,
    boolean: this.numberConstraintsToValidatorsRecord,
    object: undefined,
    'number.price': this.numberConstraintsToValidatorsRecord,
    'number.percentage': this.numberConstraintsToValidatorsRecord,
    'string.url': this.stringConstraintsToValidatorsRecord,
    'string.currency': this.stringConstraintsToValidatorsRecord,
    'string.email': this.stringConstraintsToValidatorsRecord,
    date: undefined,
    'date.time': undefined,
    enum: undefined,
    composite: undefined,
    coalesce: undefined
  }*/