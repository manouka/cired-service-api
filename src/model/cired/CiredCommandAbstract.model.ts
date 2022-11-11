import { Model } from 'sequelize';

export enum CiredArea {
    area_1 = 0,
    area_2 = 1,
    area_3 = 2,
    area_4 = 3,
}


/**
 * 
 */
interface CiredCommandInterface {

    send(): unknown;

}

/**
 * 
 */
export abstract class CiredCommandAbstractModel extends Model  {

}