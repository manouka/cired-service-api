
import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, HasOne, BelongsTo, ForeignKey, HasMany, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { RequestAuthorization, RequestAuthorizationType } from '../../entities/Request';
import { DeviceInterface, DeviceType } from '../../entities/Device';
import { CoordinatorModel } from './CoordinatorModel';
/**
 * Commande d'entrée
 */
@Table({ tableName: 'T_DEVICE' })
export class DeviceModel extends Model implements DeviceInterface {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @ForeignKey(() => CoordinatorModel)
    @Column(DataType.INTEGER)
    public coordinatorId: number;

    @Column(DataType.STRING)
    public type: DeviceType;

    @Column(DataType.STRING)
    public address: string;

    @Column({ 
        type: DataType.STRING(1024),
        set(value) { value ? this.setDataValue('information', JSON.stringify(value)) : null },
        get() { const rawValue = this.getDataValue('information'); return rawValue ? JSON.parse(rawValue) : null;} 
    })    
    public information?: unknown;

    @BelongsTo(() => CoordinatorModel)
    public coordinator: CoordinatorModel;  

    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
}