import { DataType } from "sequelize";

/**
 * 
 */
/* export type OrmModelDefinition = {
    repository: string;
    entity: string;
    table: string;
}
*/
/**
 * 
 */
export type OrmEntityDefinition = {
    repository: string;
    table: string;
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