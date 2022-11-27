
/*import { CiredAddressException, CiredCommandException, CiredFlagException } from '../exceptions';
import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, AllowNull, Is, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { CiredActionEntree, CiredAddressEntree, CiredFlagIndex, CiredFlagState, CiredFlagTimer } from '../tool/cired/CiredEntreeTool';
import { IsValueAllowed, IsValueRangedAllowed } from '../tool/Validator';
import { CiredArea } from '../tool/cired/CiredTool';
import { ComponentModel } from './database/ComponentModel';

export const ciredActionEntreeDescriptor: Record<(keyof typeof CiredActionEntree), string[]> = {
    writeFlagState: ['area', 'address', 'command', 'flagIndex', 'flagState'],
    writeFlagExclusiveState: ['area', 'address', 'command', 'flagIndex'],
    readFlagState: ['area', 'address', 'command', 'flagIndex'],
    readFlagExclusiveState: ['area', 'address', 'command', 'flagIndex'],
    readLoop: ['area', 'address', 'command'],
    readVersion: ['area', 'address', 'command'],
}


/**
 * Commande d'entrée
 */
/*@Table({ tableName: 'T_CIRED_COMMAND_ENTREE' })
export class CiredCommandEntreeModel extends Model {


    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    public id: number;

    @ForeignKey(() => ComponentModel)
    @Column(DataType.INTEGER)
    componentId: number;

    @Column({type: DataType.STRING, set(name) {this.setDataValue('name', name  + 'gdfgdfgfd' ) }})
    public name: string;

    @Is(function validator(value): void {
        if (!IsValueAllowed(value, CiredArea)) {
            throw new CiredAddressException(CiredAddressException.areaNotAllowed, `CiredCommandEntreeEntity - Cired Area => ${value} not allowed`)
        }
    })
    @Column(DataType.INTEGER)
    public area: CiredArea;

    @Is(function validator(value): void {
        if (!IsValueRangedAllowed(value, CiredAddressEntree.min, CiredAddressEntree.max)) {
            throw new CiredAddressException(CiredAddressException.addressNotAllowed, `CiredCommandEntreeEntity - Cired Address => ${value} not allowed`)
        }
    })
    @Column(DataType.INTEGER)
    public address: number;

    @Is(function validator(value): void {
        if (!IsValueAllowed(value, CiredActionEntree)) {
            throw new CiredAddressException(CiredCommandException.commandEntreeNotAllowed, `CiredCommandEntreeEntity - Cired Command => ${value} not allowed`)
        }
    })
    @Column(DataType.STRING)
    public action: CiredActionEntree;

    @Is(function validator(value): void {
        if (!IsValueAllowed(value, CiredFlagIndex)) {
            throw new CiredFlagException(CiredFlagException.flagIndexNotAllowed, `CiredCommandEntreeEntity - Cired Flag index => ${value} not allowed`)
        }
    })
    @Column(DataType.INTEGER)
    public flagIndex: CiredFlagIndex;

    @Is(function validator(value): void {
        if (!IsValueAllowed(value, CiredFlagState)) {
            throw new CiredFlagException(CiredFlagException.flagStateNotAllowed, `CiredCommandEntreeEntity - Cired Flag state => ${value} not allowed`)
        }
    })
    @Column(DataType.INTEGER)
    public flagState: CiredFlagState;

    @Is(function validator(value): void {
        if (!IsValueRangedAllowed(value, CiredFlagTimer.min, CiredFlagTimer.max)) {
            throw new CiredFlagException(CiredFlagException.flagTimerNotAllowed, `CiredCommandEntreeEntity - Cired Flag timer => ${value} not allowed`)
        }
    })
    @Column(DataType.INTEGER)
    public flagTimer: number;

    @BelongsTo(() => ComponentModel, 'componentId')
    public Component: ComponentModel;
}


*/