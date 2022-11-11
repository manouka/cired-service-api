

import { CiredCommandException } from '../../exception';
import { IsCiredValuePropertyAllowed, IsCiredValuePropertyRangedAllowed, sealed, Test } from '../../decorator/CiredDecorator';
import { CiredArea, CiredCommandAbstractModel } from './CiredCommandAbstract.model';
import { GenericModel, OrmColumn, OrmModel } from '../../core/orm/GenericModelFactory';
import { DataTypes, Model } from 'sequelize';

/**
 * 
 */
export enum CiredAddressEntree {
    min = 0,
    max = 223,
}

/**
 * Type d'etat de flag
 */
export enum CiredFlagState {
    set = 0,
    clear = 1,
    toggle = 2,
}

/**
 * Index de flag
 */
export enum CiredFlagIndex {
    flag_1 = 1,
    flag_2 = 2,
    flag_3 = 3,
    flag_4 = 4,
    flag_5 = 5,
    flag_6 = 6,
    flag_7 = 7,
    flag_8 = 8,
}

/**
 * Timer de flag
 */
export enum CiredFlagTimer {
    min = 1,
    max = 255,
}

export type CommandCiredRaw = {
    type: Required<string>;
    adrh: Required<number>;
    adrl: Required<number>;
    cmd: Required<string>;
    flag?: number;
    etat?: number;
    temps?: number;
}

/**
 * Liste des commandes d'entrées autorisées
 */
export enum CiredCommandEntree {
    readFlagExclusiveState = 'rFlagEx',
    readFlagState = 'rFlag',
    readLoop = 'rLoop',
    readVersion = 'version',
    writeFlagExclusiveState = 'wFlagEx',
    writeFlagState = 'wFlag',
}

export const ciredCommandEntreeValidator: Record<(keyof typeof CiredCommandEntree), (ciredCommandEntree: CiredCommandEntreeModel) => void> = {
    writeFlagState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex', 'flagState']),
    writeFlagExclusiveState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex']),
    readFlagState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex']),
    readFlagExclusiveState: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command', 'flagIndex']),
    readLoop: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command']),
    readVersion: (ciredCommandEntree) => ciredCommandEntree.checkPropertiesCorrectySetted(['area', 'address', 'command']),
}

/**
 * Interface commande d'entrée
 */
interface CiredCommandEntreeInterface {
    area: CiredArea;
    address: number;
    command: CiredCommandEntree
    flagIndex?: CiredFlagIndex;
    flagState: CiredFlagState;
}

export interface ModelTestInterface  {

    area: number;
}



@OrmModel({ modelName: 'ModelTest', tableName: 'T_TEST' })
export class ModelTest extends GenericModel implements ModelTestInterface {

    @OrmColumn({ type: DataTypes.INTEGER, name: 'AREA' })
    public area: number;

    public static foo() {
        console.log('ModelTest');
    }
}

@OrmModel({ modelName: 'ModelFoo', tableName: 'T_FOO' })
export class ModelFoo extends GenericModel implements ModelTestInterface {

    @OrmColumn({ type: DataTypes.INTEGER, name: 'AREA' })
    public area: number;

    public static foo() {
        console.log('ModelFoo');
    }
}

/**
 * Commande d'entrée
 */
//@SequelizeModelNameDecorator('CiredCommandEntreeModel')
export class CiredCommandEntreeModel extends CiredCommandAbstractModel implements CiredCommandEntreeInterface {

    public id: number;

    @IsCiredValuePropertyAllowed(CiredArea)
    //@SequelizeAttributeDecorator(DataTypes.INTEGER, false, false)
    public area: number;

    @IsCiredValuePropertyRangedAllowed(CiredAddressEntree.min, CiredAddressEntree.max)
  //  @SequelizeAttributeDecorator(DataTypes.INTEGER, false, false)
    public address: number;

    @IsCiredValuePropertyAllowed(CiredCommandEntree)
  //  @SequelizeAttributeDecorator(DataTypes.STRING, false, false)
    public command: CiredCommandEntree;

    @IsCiredValuePropertyAllowed(CiredFlagIndex)
 //   @SequelizeAttributeDecorator(DataTypes.INTEGER, false, false)
    public flagIndex: CiredFlagIndex;

    @IsCiredValuePropertyAllowed(CiredFlagState)
  //  @SequelizeAttributeDecorator(DataTypes.INTEGER, false, false)
    public flagState: CiredFlagState;

    @IsCiredValuePropertyRangedAllowed(CiredFlagTimer.min, CiredFlagTimer.max)
 //   @SequelizeAttributeDecorator(DataTypes.INTEGER, false, false)
    public flagTimer: number;

    /**
     */
    public checkPropertiesCorrectySetted(propertiesName: Array<string>) {

        propertiesName.map((property) => {
            if (!Reflect.hasMetadata(property, CiredCommandEntreeModel)) {

                throw new CiredCommandException(CiredCommandException.command_entree_not_valid, `Property ${property} required for command ${this.command}`)
            }
        })

    }

    /**
     * 
     * @returns 
     */
    public transform() {
        let ciredCommandRaw: CommandCiredRaw = { 
            type : 'entree',
            adrh : this.area,
            adrl: this.address,
            cmd: this.command,
            flag: this.flagIndex,
            etat: this.flagState,
            temps: this.flagTimer

        };

        return ciredCommandRaw;
    }


}

