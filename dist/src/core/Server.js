"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.Server = void 0;
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const https = require("https");
const database_1 = require("../../parameter/database");
const Controller_1 = require("./Controller");
const Database_1 = require("./Database");
class Server {
    constructor() {
        Database_1.coreDatabase.initialization(database_1.databaseConfig);
        Database_1.coreDatabase.modelFactory();
        this.app = express();
        this.app.use(bodyParser.raw({ limit: "50mb" }));
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.text({ limit: "50mb" }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('', Controller_1.default.registerRoutes());
        this.initRouter();
        if (!database_1.hostConfig.useTls) {
            this.server = http.createServer(this.app);
            console.log("created HTTP server");
        }
        else {
            this.server = https.createServer({});
            console.log("created HTTPS (TLS) server");
        }
    }
    start() {
        console.log('server started on : http://localhost:8081');
        this.server.listen('8081');
    }
    stop() {
        console.log('server stopped');
    }
    initRouter() {
    }
}
exports.Server = Server;
exports.server = new Server();
//# sourceMappingURL=Server.js.map