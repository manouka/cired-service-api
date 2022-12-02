
import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, HasOne, BelongsTo, ForeignKey, HasMany, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ComponentModel } from './ComponentModel';
import { RequestAuthorization, RequestAuthorizationType } from '../../entities/Request';
import { InstallationModel } from './InstallationModel';
import { InstallationInterface } from '../../entities/Installation';
import { CoordinatorInterface, CoordinatorType } from '../../entities/Coordinator';
import { DeviceModel } from './DeviceModel';

/**
 * Commande d'entrée
 */
@Table({ tableName: 'T_COORDINATOR' })
export class CoordinatorModel extends Model implements CoordinatorInterface {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @ForeignKey(() => InstallationModel)
    @Column(DataType.INTEGER)
    public installationId: number;

    @Column(DataType.STRING)
    public type: CoordinatorType;

    @Column(DataType.STRING)
    public host: string;

    @Column(DataType.INTEGER)
    public port: number;

    @Column({ 
        type: DataType.STRING,
        set(value) { value ? this.setDataValue('authorization', JSON.stringify(value)) : null },
        get(): RequestAuthorization { const rawValue = this.getDataValue('authorization'); return rawValue ? JSON.parse(rawValue) : null;} 
    })
    public authorization: RequestAuthorization;  

    @Column({ 
        type: DataType.STRING(1024),
        set(value) { value ? this.setDataValue('externalInformation', JSON.stringify(value)) : null },
        get() { const rawValue = this.getDataValue('externalInformation'); return rawValue ? JSON.parse(rawValue) : null;} 
    })    
    public externalInformation?: unknown;

    @BelongsTo(() => InstallationModel)
    public installation: InstallationModel;  

    @HasOne(() => DeviceModel)
    public device: DeviceModel

    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
}