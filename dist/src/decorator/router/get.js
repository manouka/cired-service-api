"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patch = exports.Post = exports.Get = void 0;
require("reflect-metadata");
const query_param_1 = require("./query-param");
const Get = (path) => (target, propertyKey, descriptor) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
    (0, query_param_1.applyQueryParams)(target, propertyKey, descriptor);
    let currentRoute = routes.find((r) => r.methodName === propertyKey);
    if (currentRoute === undefined) {
        currentRoute = {
            path,
            requestMethod: 'get',
            methodName: propertyKey,
        };
        routes.push(currentRoute);
    }
    else {
        currentRoute.path = path;
        currentRoute.methodName = propertyKey;
        currentRoute.path = path;
    }
    Reflect.defineMetadata('routes', routes, target.constructor);
};
exports.Get = Get;
const Post = (path) => (target, propertyKey) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
    routes.push({
        requestMethod: 'post',
        path,
        methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
};
exports.Post = Post;
const Patch = (path) => (target, propertyKey, descriptor) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
    routes.push({
        requestMethod: 'patch',
        path,
        methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
};
exports.Patch = Patch;
exports.default = { Get: exports.Get, Post: exports.Post, Patch: exports.Patch };
//# sourceMappingURL=get.js.map