/**
 * dépendances externes
 */
import { DataTypes, DataTypeAbstract, Model, ModelAttributeColumnOptions, Sequelize } from 'sequelize';
import { DeviceInterface } from '../../entity/Device';

type SequelizeAttributes<T extends { [key: string]: any }> = {
  [P in keyof T]: string | DataTypeAbstract | ModelAttributeColumnOptions;
};

/**
 *
 */
export class DeviceFactory {

  static attributes: SequelizeAttributes<DeviceInterface> = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    name: {
      type: DataTypes.STRING(512),
      allowNull: true,
      field: 'NAME'
    },
    address: {
      type: DataTypes.STRING(512),
      allowNull: true,
      field: 'ADDRESS'
    },
    authorization: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'AUTHORIZATION'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'TYPE'
    },
  };

  /**
   * Initialisation de l'entité sequelize
   *
   * @param sequelize 
   */
  public static define(sequelize: Sequelize) {

   // Device.init(DeviceFactory.attributes, DeviceFactory.getOptions(sequelize))
  }

  public static getOptions(sequelize: Sequelize) {
    return { sequelize, modelName: 'Device', tableName: 'T_DEVICE', timestamps: false }
  }


  /**
   * /!\ Appeler cette méthode uniquement si tous les modèles sequelize on été définis /!\
   * 
   * @param sequelize 
   */
  public static associateModels() {

  }
}
