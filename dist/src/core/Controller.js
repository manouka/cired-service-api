"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CoordinatorController_1 = require("../controller/CoordinatorController");
const CoordinatorController_2 = require("../controller/CoordinatorController");
const InstallationController_1 = require("../controller/InstallationController");
const Routes = [
    CoordinatorController_1.default,
    CoordinatorController_2.default,
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
                fn(req, res, next, ...args);
            };
            let args = [1, 2, 3];
            if (requestMethod === 'get') {
                router.route(url).get((req, res, next, ...args) => {
                    controllerMethod(req, res, next, ...args);
                });
            }
            else if (requestMethod === 'post') {
                router.route(url).post((req, res, next, ...args) => {
                    controllerMethod(req, res, next, ...args);
                });
            }
            else if (requestMethod === 'patch') {
                router.route(url).patch((req, res, next, ...args) => {
                    controllerMethod(req, res, next, ...args);
                });
            }
            else if (requestMethod === 'put') {
                router.route(url).put((req, res, next, ...args) => {
                    controllerMethod(req, res, next, ...args);
                });
            }
            else if (requestMethod === 'delete') {
                router.route(url).delete((req, res, next, ...args) => {
                    controllerMethod(req, res, next, ...args);
                });
            }
        });
    });
    return router;
};
exports.default = { registerRoutes };
//# sourceMappingURL=Controller.js.map