/**
 * Dépendances externes
 */
import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from "http";
import * as https from "https";

/**
 * Dépendances internes
 */
import { databaseConfig, hostConfig } from "../../parameter/database";
import ControllerConfig from "./Controller";
import { coreDatabase } from "./Database";

/**
 * 
 */
export class Server {
    private app: express.Application;
    private server: (http.Server | https.Server);

    constructor() {

        coreDatabase.initialization(databaseConfig);
        coreDatabase.modelFactory()
       // ormModelFactory.create<ModelTest, EntityTest>(ModelTest, EntityTest);
   
        this.app = express();
        this.app.use(bodyParser.raw({limit: "50mb"}));
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.text({limit: "50mb"}));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('', ControllerConfig.registerRoutes());
        // init des routers
        this.initRouter();



        /**
         * Exception handler
         */
       // this.app.use(OnError);

        if (!hostConfig.useTls) {
            this.server = http.createServer(this.app);
            console.log("created HTTP server");
        } else {
            this.server = https.createServer({});
            console.log("created HTTPS (TLS) server");
        }
    }

    public start(): void {
        console.log('server started on : http://localhost:8081')
        this.server.listen('8081');
    }

    /**
     * 
     */
    public stop(): void {
        console.log('server stopped')
    }

    private initRouter() {
        //this.app.use(defaultRouter);
    }
}

export let server = new Server();
