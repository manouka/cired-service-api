

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is } from 'sequelize-typescript';


export enum ComponentType {

    ciredCommandEntree,
    ciredCommandSortie,
}


@Table({ tableName: 'T_DICTIONARY' })
export class DictionaryModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @Column(DataType.STRING)
    public name: string;

}