

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { ComponentModel } from './ComponentModel';


export class ElementType {

}

@Table({ tableName: 'T_ELEMENT' })
export class ElementModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @ForeignKey(() => ComponentModel)
    @Column(DataType.INTEGER)
    componentId: number;

    @Column(DataType.INTEGER)
    public type: ElementType;

    @Column(DataType.STRING)
    public name: string;

    @BelongsTo(() => ComponentModel, 'componentId')
    public component: ComponentModel;
}