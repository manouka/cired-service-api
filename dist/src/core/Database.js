"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreDatabase = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
class CoreDatabase {
    initialization(databaseConfig) {
        this.databaseConfig = databaseConfig;
        this.sequelize = new sequelize_typescript_1.Sequelize({
            database: databaseConfig.database,
            dialect: 'mysql',
            username: databaseConfig.username,
            password: databaseConfig.password,
            models: [`${__dirname}/../models/database/**`],
        });
    }
    modelFactory() {
    }
}
exports.coreDatabase = new CoreDatabase();
//# sourceMappingURL=Database.js.map