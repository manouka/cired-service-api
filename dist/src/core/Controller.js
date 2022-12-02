"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exceptions_1 = require("../exceptions");
const CoordinatorController_1 = require("../controller/CoordinatorController");
const DeviceController_1 = require("../controller/DeviceController");
const InstallationController_1 = require("../controller/InstallationController");
const Routes = [
    CoordinatorController_1.default,
    DeviceController_1.default,
    InstallationController_1.default,
];
const registerRoutes = () => {
    console.log('Registring routes');
    const router = (0, express_1.Router)();
    Routes.forEach((Controler) => {
        const instance = new Controler();
        const prefix = Reflect.getMetadata('prefix', Controler);
        const routes = Reflect.getMetadata('routes', Controler);
        routes.forEach((route) => {
            const url = prefix + route.path;
            const p = instance[route.methodName];
            const fn = p;
            const { requestMethod } = route;
            const controllerMethod = (req, res, next, ...args) => {
                fn(req, res, next, ...args).catch((error) => {
                    if (error instanceof exceptions_1.GenericException) {
                        if (error.code) {
                            res.status(error.status).send({ code: error.code, message: error.message });
                        }
                        else {
                            res.status(error.status).send({ message: error.message });
                        }
                    }
                    else {
                        res.status(400).send({ code: error.code, message: error.message });
                    }
                });
            };
            let args = [1, 2, 3];
            router.route(url)[requestMethod]((req, res, next, ...args) => {
                controllerMethod(req, res, next, ...args);
            });
        });
    });
    return router;
};
exports.default = { registerRoutes };
//# sourceMappingURL=Controller.js.map