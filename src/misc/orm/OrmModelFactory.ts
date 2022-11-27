
import { DataType, Model, Sequelize } from 'sequelize';
import "reflect-metadata";
import { databaseConfig } from '../../../parameter/database';
import { OrmEntityDefinition } from './OrmType';

/**
 * 
 */
export class OrmModel extends Model {

}

export class OrmEntity extends Model {

}

/**
 * 
 */


export class OrmModelFactory {

    private sequelize: Sequelize;

    public constructor() {

        let dbOptions: any = databaseConfig;

        dbOptions.pool = {
            max: 10,
            min: 0,
            acquire: 60000,
            idle: 10000,
            evict: 60000
        };

        this.sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, dbOptions);
       // this.sequelize.sync({ force: true });
    }

    /**
     * 
     * @param type 
     */

    
    public create<Model, Entity>(model: (new () => Model), entity: (new () => Entity)) {


        let modelDefinition: OrmEntityDefinition = Reflect.getMetadata('orm:entity', entity);

        let ModelGeneric: any = model;

        let sequelize = this.sequelize;
console.log(modelDefinition)
        ModelGeneric.init(this.getAttribute(entity), { sequelize, modelName: entity.name, tableName: modelDefinition.table, timestamps: false })

    }

    /**
     * 
     * @param entity 
     * @returns 
     */
    private getAttribute<Entity>(entity: Entity) {
        let regexAttribute = new RegExp('^orm:attribute:([a-zA-Z0-9]+)$');
        let attributes: any = {};

        Reflect.getMetadataKeys(entity).map((key) => {

     
            if (!regexAttribute.test(key)) {
                return;
            }

            let property = key.match(regexAttribute)[1];

      
        
            attributes = { ...attributes, ...{ [property]: Reflect.getMetadata(key, entity) } }
        })

        return attributes;
    }
}

export const ormModelFactory = new OrmModelFactory();


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