
import { DataType } from "sequelize";
import { snakeCase } from "snake-case";
import { OrmDecoratorException } from "./OrmException";
import { OrmColumnDefinition, OrmModelDefinition } from "./OrmType";

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

export const OrmModel = (modelDefinition: OrmModelDefinition): ClassDecorator => (target: Object) => {

    if (Reflect.hasMetadata(`orm:model`, target)) {
        throw new OrmDecoratorException(OrmDecoratorException.modelAlreadyDefine, `Model ${target.constructor} already defined`)
    }

    Reflect.defineMetadata(`orm:model`, modelDefinition, target);
}


export const OrmColumn = (columnDefinition: OrmColumnDefinition): PropertyDecorator => (target: Object, propertyKey: string): void => {
    if (Reflect.hasMetadata(`orm:attribute:${propertyKey}`, target)) {
        throw new OrmDecoratorException(OrmDecoratorException.properyAlreadyDefine, `Property ${propertyKey} for model ${target.constructor} already defined`)
    }

    let attributeDefinition: SequelizeAttributeDefinition = {
        type: columnDefinition.type,
        allowNull: columnDefinition.nullable,
        primaryKey: columnDefinition.primarakey,
        field: columnDefinition.name ? columnDefinition.name : snakeCase(propertyKey).toUpperCase(),
        autoIncrement: columnDefinition.autoIncrement,

    };

    Reflect.defineMetadata(`orm:attribute:${propertyKey}`, attributeDefinition, target.constructor);
}