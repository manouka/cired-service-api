

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { CoordinatorModel } from './CoordinatorModel';
import { ElementModel } from './ElementModel';


export type ComponentType = ComponentTypeCired & ComponentTypeOpenhab;

export type ComponentTypeCired = 'entree' | 'sortie' | 'dmx';
export type ComponentTypeOpenhab = 'openhab';

@Table({ tableName: 'T_COMPONENT' })
export class ComponentModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @ForeignKey(() => CoordinatorModel)
    @Column(DataType.INTEGER)
    public deviceId: number;

    @Column(DataType.INTEGER)
    public type: ComponentType;

    @Column(DataType.INTEGER)
    public index: number;

    @Column(DataType.STRING)
    public name: string;

    @BelongsTo(() => CoordinatorModel, 'deviceId')
    public device: CoordinatorModel;

    @HasMany(() => ElementModel)
    public elements: Array<ElementModel>;

    @Column({ 
        type: DataType.STRING(1024),
        set(value) { value ? this.setDataValue('information', JSON.stringify(value)) : null },
        get() { const rawValue = this.getDataValue('information'); return rawValue ? JSON.parse(rawValue) : null;} 
    })
    public information: string;


    /*@Column({ 
        type: DataType.STRING,
        set(authorization) { authorization ? this.setDataValue('authorization', JSON.stringify(authorization)) : null },
        get() { const rawValue = this.getDataValue('authorization'); return rawValue ? JSON.parse(rawValue) : null;} 
    })*/
    

}