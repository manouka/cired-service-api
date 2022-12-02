

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { ElementInterface } from '../../entities/Element';
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
    public componentId: number;

    @Column(DataType.INTEGER)
    public type: ElementType;

    @Column(DataType.STRING)
    public allias: string;

    @BelongsTo(() => ComponentModel, 'componentId')
    public component: ComponentModel;

    @Column({ 
        type: DataType.STRING(1024),
        set(value) { value ? this.setDataValue('parameters', JSON.stringify(value)) : null },
        get() { const rawValue = this.getDataValue('parameters'); return rawValue ? JSON.parse(rawValue) : null;} 
    })    
    public parameters: unknown;
}