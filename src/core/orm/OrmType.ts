import { DataType } from "sequelize";

/**
 * 
 */
export type OrmModelDefinition = {
    modelName: string;
    tableName: string;
}

/**
 * 
 */
export type OrmColumnDefinition = {
    type: DataType;
    name?: string;
    primarakey?: boolean;
    nullable?: boolean;
    autoIncrement?: boolean;
}