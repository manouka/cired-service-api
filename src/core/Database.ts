import { DataBaseConfig } from '../../parameter/database';
import { Sequelize } from 'sequelize-typescript';


class CoreDatabase {
    
    sequelize: Sequelize;

    databaseConfig: DataBaseConfig;

    /**
     * 
     */
    public initialization(databaseConfig: DataBaseConfig) {

        this.databaseConfig = databaseConfig;

        this.sequelize = new Sequelize({
            database: databaseConfig.database,
            dialect: 'mysql',
            username: databaseConfig.username,
            password: databaseConfig.password,
            logging: false,
            models: [`${__dirname}/../models/database/**`],
            
        });

        //this.sequelize.sync({ force: true });
    }

    /**
     * 
     * @param modelsPath 
     */
    public modelFactory() {
 
        //this.sequelize.addModels([`${__dirname}/../models`]);
    }
}

export const coreDatabase = new CoreDatabase()