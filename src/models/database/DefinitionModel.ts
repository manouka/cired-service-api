

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, BelongsTo } from 'sequelize-typescript';
import { DictionaryModel } from './DictionaryModel';


export enum ComponentType {

    ciredCommandEntree,
    ciredCommandSortie,
}


@Table({ tableName: 'T_DEFINITION' })
export class DefinitionModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @BelongsTo(() => DictionaryModel, 'dictionaryId')
    public dictionary: DictionaryModel;

    @Column(DataType.STRING)
    public label: string;
}