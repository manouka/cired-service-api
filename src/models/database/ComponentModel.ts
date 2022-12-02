

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, BelongsTo, ForeignKey, HasMany, BeforeUpdate, BeforeCreate, BeforeSave } from 'sequelize-typescript';
import { ComponentType } from '../../entities/Component';
import { DeviceModel } from './DeviceModel';
import { ElementModel } from './ElementModel';


@Table({ tableName: 'T_COMPONENT' })
export class ComponentModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @ForeignKey(() => DeviceModel)
    @Column(DataType.INTEGER)
    public deviceId: number;

    @Column(DataType.INTEGER)
    public type: ComponentType;

    @Column(DataType.INTEGER)
    public index: number;

    @Column(DataType.STRING)
    public alias: string;

    @Column(DataType.STRING)
    public name: string;

    @BelongsTo(() => DeviceModel, 'deviceId')
    public device: DeviceModel;

    @HasMany(() => ElementModel)
    public elements: Array<ElementModel>;

    @Column({ 
        type: DataType.STRING(1024),
        set(value) { value ? this.setDataValue('information', JSON.stringify(value)) : null },
        get() { const rawValue = this.getDataValue('information'); return rawValue ? JSON.parse(rawValue) : null;} 
    })
    public information: string;
}