"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Patch = exports.Post = exports.Get = void 0;
require("reflect-metadata");
const Body_1 = require("./Body");
const Get = (path) => (target, propertyKey, descriptor) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
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
const Post = (path) => (target, propertyKey, descriptor) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    (0, Body_1.applyBody)(target, propertyKey, descriptor);
    const routes = Reflect.getMetadata('routes', target.constructor);
    let currentRoute = routes.find((r) => r.methodName === propertyKey);
    if (currentRoute === undefined) {
        currentRoute = {
            path,
            requestMethod: 'post',
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
const Put = (path) => (target, propertyKey, descriptor) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
    routes.push({
        requestMethod: 'put',
        path,
        methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
};
exports.Put = Put;
const Delete = (path) => (target, propertyKey, descriptor) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor);
    routes.push({
        requestMethod: 'delete',
        path,
        methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
};
exports.Delete = Delete;
exports.default = { Get: exports.Get, Post: exports.Post, Patch: exports.Patch, Put: exports.Put, Delete: exports.Delete };
//# sourceMappingURL=Method.js.map