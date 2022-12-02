"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormModelFactory = exports.OrmModelFactory = exports.OrmEntity = exports.OrmModel = void 0;
const sequelize_1 = require("sequelize");
require("reflect-metadata");
const database_1 = require("../../../parameter/database");
class OrmModel extends sequelize_1.Model {
}
exports.OrmModel = OrmModel;
class OrmEntity extends sequelize_1.Model {
}
exports.OrmEntity = OrmEntity;
class OrmModelFactory {
    constructor() {
        let dbOptions = database_1.databaseConfig;
        dbOptions.pool = {
            max: 10,
            min: 0,
            acquire: 60000,
            idle: 10000,
            evict: 60000
        };
        this.sequelize = new sequelize_1.Sequelize(database_1.databaseConfig.database, database_1.databaseConfig.username, database_1.databaseConfig.password, dbOptions);
    }
    create(model, entity) {
        let modelDefinition = Reflect.getMetadata('orm:entity', entity);
        let ModelGeneric = model;
        let sequelize = this.sequelize;
        ModelGeneric.init(this.getAttribute(entity), { sequelize, modelName: entity.name, tableName: modelDefinition.table, timestamps: false });
    }
    getAttribute(entity) {
        let regexAttribute = new RegExp('^orm:attribute:([a-zA-Z0-9]+)$');
        let attributes = {};
        Reflect.getMetadataKeys(entity).map((key) => {
            if (!regexAttribute.test(key)) {
                return;
            }
            let property = key.match(regexAttribute)[1];
            attributes = Object.assign(Object.assign({}, attributes), { [property]: Reflect.getMetadata(key, entity) });
        });
        return attributes;
    }
}
exports.OrmModelFactory = OrmModelFactory;
exports.ormModelFactory = new OrmModelFactory();
//# sourceMappingURL=OrmModelFactory.js.map