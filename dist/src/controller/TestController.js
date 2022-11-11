"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_param_1 = require("../decorator/router/query-param");
const Controller_1 = require("../decorator/router/Controller");
const get_1 = require("../decorator/router/get");
let TestController = class TestController {
    getAccount(req, res, id) {
        res.status(200).send();
    }
};
__decorate([
    (0, get_1.Get)('/:id([0-9])'),
    __param(2, query_param_1.QueryParam)
], TestController.prototype, "getAccount", null);
TestController = __decorate([
    (0, Controller_1.default)('/test')
], TestController);
exports.default = TestController;
//# sourceMappingURL=TestController.js.map