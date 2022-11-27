/**
 * Dépendances externes
 */
import { Address } from 'cluster';
import { PoolOptions } from 'sequelize';

export interface IHost extends Address {
  useTls: boolean,
  certificate: string,
  certificeKey: string,
}

export const hostConfig: IHost = {
  address: process.env.HOST || 'localhost',
  port: process.env.PORT ? parseInt(process.env.PORT) : 8080,
  addressType: process.env.addressType == "6" ? 6 : 4,
  useTls: process.env.USE_TLS ? (process.env.USE_TLS == "true") : false,
  certificate: process.env.CERT || undefined,
  certificeKey: process.env.CERT_KEY || undefined,
}


/**
 * Connexions bdd
 */
export type mysqlDialect = "mssql" | "mysql" | "postgres" | "sqlite" | "mariadb";

export type DataBaseConfig = {
  name: string;
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  log: boolean;
  forceSync: boolean
  dialect: mysqlDialect;
  pool: PoolOptions;
  models: Array<string>;
}

export const databaseConfig: DataBaseConfig = {
  name: 'base de test',
  username: "root",
  password: "wingmakers",
  database: "test",
  host: "127.0.0.1",
  port: 3306,
  dialect: 'mysql',
  log: false,
  forceSync: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  models: [`${__dirname}/../src/models`],
};