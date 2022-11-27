
import { valueRange } from "../../tool/Validator";


export enum CiredActionEntree {
    readFlagExclusiveState = 'rFlagEx',
    readFlagState = 'rFlag',
    readLoop = 'rLoop',

    writeFlagExclusiveState = 'wFlagEx',
    writeFlagState = 'wFlag',
}

export enum CiredActionSortie {
    readRelayState = 'rRelais',
    writeRelayState = 'wRelais',
}

export enum CiredActionSystem {

    readVersion = 'version',
}

export type CiredAction = CiredActionEntree | CiredActionSortie | CiredActionSystem;

export const ciredActionDescriptor = new Map<CiredActionEntree | CiredActionSortie | CiredActionSystem, string[]>([
    [CiredActionEntree.readFlagExclusiveState, []],
    [CiredActionEntree.readFlagState, ['flag']],
    [CiredActionEntree.readLoop, []],
    
    [CiredActionEntree.writeFlagExclusiveState, ['flag']],
    [CiredActionEntree.writeFlagState, ['flag', 'etat', 'temps']],

    [CiredActionSortie.readRelayState, ['relais']],
    [CiredActionSortie.writeRelayState, ['relais', 'etat']],

    [CiredActionSystem.readVersion, []],
]);


/**
 * 
 */

 export const CiredAddressScanRange: Array<number> = [...Array.from(Array(14).keys()).map(i => (0 + i) * 16), 224, ...Array.from(Array(16).keys()).map(i => 240 + i)];

export const CiredAddressRange: Array<number> = [...Array.from(Array(224).keys()).map(i => 0 + i), 224, ...Array.from(Array(16).keys()).map(i => 240 + i)];
export type CiredAddress = CiredAddressEntree | CiredAddressSortie;
 
export const CiredAddressEntreeRange: Array<number> = Array.from(Array(224).keys()).map(i => i + 1);
export type CiredAddressEntree = valueRange<0, 224>

 export const CiredAddressSortieRange: Array<number> = Array(16).fill(0).map((_, i) => 240 + i);
 export type CiredAddressSortie = valueRange<240, 255>

 export enum CiredArea {
    area_1 = 0 * 2 + 240,
    area_2 = 0 * 2 + 240,
    area_3 = 0 * 2 + 240,
    area_4 = 0 * 2 + 240,
}

export enum CiredCommandType {
    entree = 'entree',
    sortie = 'sortie',
    dmx = 'dmx',
    systeme = "systeme",
    gsm = 'gsm',
}


/**
 * Type d'etat
 */
export enum CiredState {
    set = 0,
    clear = 1,
    toggle = 2,
}



/**
 * Index de flag
 */
export enum CiredFlag {
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




/**
 * Index de relais
 */
export enum CiredRelay {
    relais_1 = 1,
    relais_2 = 2,
    relais_3 = 3,
    relais_4 = 4,
    relais_5 = 5,
    relais_6 = 6,
    relais_7 = 7,
    relais_8 = 8,
    relais_9 = 9,
    relais_10 = 10,
    relais_11 = 11,
    relais_12 = 12,
}

