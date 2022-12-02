

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';


export class ElementType {

}

@Table({ tableName: 'T_MENU' })
export class MenuModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @Column(DataType.INTEGER)
    public type: ElementType;

    @Column(DataType.STRING)
    public name: string;

    @Column(DataType.STRING)
    public image: string;

}