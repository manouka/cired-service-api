"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Controller = (prefix = '') => (target) => {
    Reflect.defineMetadata('prefix', prefix, target);
    if (!Reflect.hasMetadata('routes', target)) {
        Reflect.defineMetadata('routes', [], target);
    }
};
exports.default = Controller;
//# sourceMappingURL=Controller.js.map