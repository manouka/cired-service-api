
/**
 * Libelle d'une  reponse d'un commande cired
 */
 export enum CiredResponseCode {
    ok = 'CIRED_OK',
}

/**
 * Libelle des devices cired
 */
export enum CiredDeviceLabel {
    gateway = 'CIRED_GATEWAY',
    gatewayGsm = 'CIRED_GSM_GATEWAY',
}

/**
 * Interface d'une reponse d'un commande cired
 */
export type CiredResponse = {

    // requete
    flag: CiredResponseEtat;
    flagEx: CiredResponseEtat;
    relais: CiredResponseEtat;
    canal: CiredResponseDmxValue;
    groupe: CiredResponseDmxValue;
    version: string;
    reponse: string;
    rgb: CiredResponseDmxRgb;

    // info
    cired: CiredResponseInfoCired;
    droits: CiredResponseRight;
    gsm: CiredResponseGsm;
    info: CiredResponseInfoDevice;
    network: CiredResponseNetwork;

    updatedAt: number;
}


type CiredResponseInfoCired = {
    ecriture: number;
    lecture: number;
    zone: number;
    adrl: number;
}

type CiredResponseRight = {
    ecriture: number;
    ecritureTO: number;
    lecture: number;
}

type CiredResponseNetwork = {

    mac: string;
    ipV4: string;
    mask: string;
    gateway: string;
    port: number;
 
}

type CiredResponseGsm = {

    error: string;
    pin: CiredResponseEtat;
    reseaux: number;
    service: CiredResponseGsmService;
    sim: number;
    temp: number; 
}

type CiredResponseGsmService = {
    connect: number;
    nom: string;
}

type CiredResponseAlim = {
    gen: number;
    pile: number;
    pileP: number;
}

type CiredResponseEtat = {
    etat: number;
}

type CiredResponseInfoDevice = {
    type: string;
    nom: string;
    stackTCPIP: string;
    progDate: string;
}

type CiredResponseDmxValue = {
    valeur: number;
    valeur_sauvegarde: number; 
}

type CiredResponseDmxRgb = {
    rouge: CiredResponseDmxValue;
    vert: CiredResponseDmxValue; 
    bleu: CiredResponseDmxValue; 
}