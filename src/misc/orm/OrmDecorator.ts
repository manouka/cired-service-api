
import { DataType } from "sequelize";
import { snakeCase } from "snake-case";
import { OrmDecoratorException } from "./OrmException";
import { OrmColumnDefinition, OrmEntityDefinition,  } from "./OrmType";

/**
 * 
 */
 type SequelizeAttributeDefinition = {
    type: DataType;
    allowNull: boolean;
    primaryKey?: boolean;
    autoIncrement?: boolean;
    field: string;
}

export const Entity = (modelDefinition: OrmEntityDefinition): ClassDecorator => (target: Object) => {

    if (Reflect.hasMetadata(`orm:entity`, target)) {
        throw new OrmDecoratorException(OrmDecoratorException.entityAlreadyDefine, `Entity ${target.constructor} already defined`)
    }

    Reflect.defineMetadata(`orm:entity`, modelDefinition, target);
}


export const Column = (columnDefinition: OrmColumnDefinition): PropertyDecorator => (target: Object, propertyKey: string): void => {



    /*if (Reflect.hasMetadata(`orm:attribute:${propertyKey}`, target)) {
        throw new OrmDecoratorException(OrmDecoratorException.properyAlreadyDefine, `Property ${propertyKey} for model ${target.constructor} already defined`)
    }*/

    let attributeDefinition: SequelizeAttributeDefinition = {
        type: columnDefinition.type,
        allowNull: columnDefinition.nullable,
        primaryKey: columnDefinition.primarakey,
        field: columnDefinition.name ? columnDefinition.name : snakeCase(propertyKey).toUpperCase(),
        autoIncrement: columnDefinition.autoIncrement,

    };

    Reflect.defineMetadata(`orm:attribute:${propertyKey}`, attributeDefinition, target.constructor);
}