

import {  } from '../../decorator/CiredDecorator';
import { CiredArea, CiredCommandAbstractModel } from './CiredCommandAbstract.model';

export enum CiredAddressSortie {
    adr_0xf0 = 240,
    adr_0xf1 = 241,
    adr_0xf2 = 242,
    adr_0xf3 = 243,
    adr_0xf4 = 244,
    adr_0xf5 = 245,
    adr_0xf6 = 246,
    adr_0xf7 = 247,
    adr_0xf8 = 248,
    adr_0xf9 = 249,
    adr_0xfa = 250,
    adr_0xfb = 251,
    adr_0xfc = 252,
    adr_0xfd = 253,
    adr_0xfe = 254,
    adr_0xff = 255,
}

export enum CiredRelayState {
    set = 0,
    clear = 1,
    toggle = 2,
}

export enum CiredRelayIndex {
    relay_1 = 1,
    relay_2 = 2,
    relay_3 = 3,
    relay_4 = 4,
    relay_5 = 5,
    relay_6 = 6,
    relay_7 = 7,
    relay_8 = 8,
    relay_9 = 9,
    relay_10 = 10,
    relay_11 = 11,
    relay_12 = 12,
}

/**
 * Liste des commandes d'entrées autorisées
 */
export enum CiredCommandSortie {
    writeRelayState = 'wRelais',
    readRelayState = 'rRelais',

    readVersion = 'version'
}
/**
 * Interface commande d'entrée
 */
 interface CiredCommandSortieInterface {

    command: CiredCommandSortie;
    relayIndex: CiredRelayIndex;
    relayState: CiredRelayState;
}

/**
 * 
 */
export class CiredCommandSortieModel extends CiredCommandAbstractModel implements CiredCommandSortieInterface {
  //  @IsCiredAreaAllowed()
    public area: CiredArea;

   // @IsCiredAddressAllowed(CiredAddressSortie)
    public address: CiredAddressSortie;

   // @IsCiredCommandAllowed(CiredCommandSortie)
    public command: CiredCommandSortie;

   // @IsCiredIndexAllowed(CiredRelayIndex)
    public relayIndex: CiredRelayIndex;

    //@IsCiredStateAllowed(CiredRelayState)
    public relayState: CiredRelayState;
}



