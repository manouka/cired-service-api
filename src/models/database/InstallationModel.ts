
import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, HasOne, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { CoordinatorInterface } from '../../entities/Coordinator';
import { InstallationInterface } from '../../Entities/Installation';
import { CoordinatorModel } from './CoordinatorModel';

/**
 * Commande d'entrée
 */
@Table({ tableName: 'T_INSTALLATION' })
export class InstallationModel extends Model implements InstallationInterface {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @Column(DataType.STRING)
    public name: string;

    @HasMany(() => CoordinatorModel)
    public coordinators: Array<CoordinatorInterface>;
}