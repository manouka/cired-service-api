"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelFactory = exports.ModelFactory = exports.GenericModel = exports.OrmColumn = exports.OrmModel = void 0;
const sequelize_1 = require("sequelize");
const snake_case_1 = require("snake-case");
require("reflect-metadata");
const config_1 = require("../../../parameter/config");
const OrmModel = (modelDefinition) => (target) => {
    Reflect.defineMetadata(`sequelize:model`, modelDefinition, target);
};
exports.OrmModel = OrmModel;
const OrmColumn = (columnDefinition) => (target, propertyKey) => {
    let attributeDefinition = {
        type: columnDefinition.type,
        allowNull: columnDefinition.nullable,
        primaryKey: columnDefinition.primarakey,
        field: columnDefinition.name ? columnDefinition.name : (0, snake_case_1.snakeCase)(propertyKey).toUpperCase(),
        autoIncrement: columnDefinition.autoIncrement,
    };
    console.log(attributeDefinition);
    Reflect.defineMetadata(`sequelize:attribute:${propertyKey}`, attributeDefinition, target.constructor);
};
exports.OrmColumn = OrmColumn;
class GenericModel extends sequelize_1.Model {
}
exports.GenericModel = GenericModel;
class ModelFactory {
    constructor() {
        let dbOptions = config_1.baseTest;
        dbOptions.pool = {
            max: 10,
            min: 0,
            acquire: 60000,
            idle: 10000,
            evict: 60000
        };
        this.sequelize = new sequelize_1.Sequelize(config_1.baseTest.database, config_1.baseTest.username, config_1.baseTest.password, dbOptions);
        this.sequelize.sync({ force: true });
    }
    create(type) {
        let modelDefinition = Reflect.getMetadata('sequelize:model', type);
        let ModelGeneric = type;
        console.log(ModelGeneric);
        console.log(ModelFactory.getAttribute(type));
        let sequelize = this.sequelize;
        ModelGeneric.init(ModelFactory.getAttribute(type), { sequelize, modelName: modelDefinition.modelName, tableName: modelDefinition.tableName, timestamps: false });
    }
    static getAttribute(type) {
        let regexAttribute = new RegExp('^sequelize:attribute:([a-zA-Z0-9]+)$');
        let attributes = {};
        Reflect.getMetadataKeys(type).map((key) => {
            if (!regexAttribute.test(key)) {
                return;
            }
            let property = key.match(regexAttribute)[1];
            attributes = Object.assign({ [property]: Reflect.getMetadata(key, type) });
        });
        return attributes;
    }
}
exports.ModelFactory = ModelFactory;
exports.modelFactory = new ModelFactory();
class CustomModel extends sequelize_1.Model {
}
//# sourceMappingURL=ModelFactory.js.map