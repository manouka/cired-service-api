"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseTest = exports.hostConfig = void 0;
exports.hostConfig = {
    address: process.env.HOST || 'localhost',
    port: process.env.PORT ? parseInt(process.env.PORT) : 8080,
    addressType: process.env.addressType == "6" ? 6 : 4,
    useTls: process.env.USE_TLS ? (process.env.USE_TLS == "true") : false,
    certificate: process.env.CERT || undefined,
    certificeKey: process.env.CERT_KEY || undefined,
};
exports.baseTest = {
    name: 'base de test',
    username: process.env.DB_BDD5_SRV_USER || "root",
    password: process.env.DB_BDD5_SRV_PASSWORD || "wingmakers",
    database: process.env.DB_BDD5_SRV_DBNAME || "test",
    host: process.env.DB_BDD5_SRV_HOST || "127.0.0.1",
    port: process.env.DB_BDD5_SRV_PORT ? parseInt(process.env.DB_BDD5_SRV_PORT) : 3306,
    dialect: process.env.DB_BDD5_SRV_DIALECT in ["mssql", "mysql", "postgres", "sqlite", "mariadb"] ? process.env.DB_BDD5_SRV_DIALECT : "mysql",
    log: false,
    forceSync: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
//# sourceMappingURL=config.js.map