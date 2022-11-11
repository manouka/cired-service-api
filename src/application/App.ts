import { server, Server } from './Server';
//import { dataBase } from './dataBase';
import { QueryTypes } from 'sequelize'

class Application {

   // public data

    public constructor () {
        /**
         * Initialisation de la connexion bdd
         */
       /* let connection = dataBase.authenticateConnection(dataBase.connection.driver)
        .then(( connection ) => {
            console.log(`data base connection started on : ${connection.config.host}:${connection.config.port}`);
*/
            /**
             * Initialisation du serveur express
             */
            server.start();

       /* }).catch((error: Error) => {
          server.stop();
        });*/
    }
}

let application: Application = new Application();