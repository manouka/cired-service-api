"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceFactory = void 0;
const sequelize_1 = require("sequelize");
class DeviceFactory {
    static define(sequelize) {
    }
    static getOptions(sequelize) {
        return { sequelize, modelName: 'Device', tableName: 'T_DEVICE', timestamps: false };
    }
    static associateModels() {
    }
}
exports.DeviceFactory = DeviceFactory;
DeviceFactory.attributes = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
    },
    name: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: true,
        field: 'NAME'
    },
    address: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: true,
        field: 'ADDRESS'
    },
    authorization: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
        field: 'AUTHORIZATION'
    },
    type: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'TYPE'
    },
};
//# sourceMappingURL=DeviceFactory.js.map