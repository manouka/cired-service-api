"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devicesConfig = void 0;
const Request_1 = require("../src/entities/Request");
exports.devicesConfig = [
    {
        name: 'test',
        type: 'cired_gateway',
        autorization: {
            type: Request_1.RequestAuthorizationType.baseAuth,
            username: 'admin',
            password: 'wingmakers'
        },
        host: 'http://192.168.0.201'
    },
];
//# sourceMappingURL=device.js.map