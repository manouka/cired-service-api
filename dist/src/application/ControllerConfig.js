"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TestController_1 = require("../controller/TestController");
const DefaultController_1 = require("../controller/DefaultController");
const Routes = [
    DefaultController_1.default,
    TestController_1.default,
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
            const controllerMethod = (req, res, next) => {
                fn(req, res, next);
            };
            if (requestMethod === 'get') {
                router.route(url).get((req, res, next) => {
                    controllerMethod(req, res, next);
                });
            }
            else if (requestMethod === 'post') {
                router.route(url).post((req, res, next) => {
                    controllerMethod(req, res, next);
                });
            }
            else if (requestMethod === 'patch') {
                router.route(url).patch((req, res, next) => {
                    controllerMethod(req, res, next);
                });
            }
        });
    });
    return router;
};
exports.default = { registerRoutes };
//# sourceMappingURL=ControllerConfig.js.map