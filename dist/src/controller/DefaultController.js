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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_param_1 = require("../decorator/router/query-param");
const Controller_1 = require("../decorator/router/Controller");
const get_1 = require("../decorator/router/get");
const CiredCommandEntree_model_1 = require("../model/cired/CiredCommandEntree.model");
let DefaultController = class DefaultController {
    getAccount(req, res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(CiredCommandEntree_model_1.ModelTest.findAll());
            res.status(200).send();
        });
    }
};
__decorate([
    (0, get_1.Get)('/:id([0-9])'),
    __param(2, query_param_1.QueryParam)
], DefaultController.prototype, "getAccount", null);
DefaultController = __decorate([
    (0, Controller_1.default)('/demo')
], DefaultController);
exports.default = DefaultController;
//# sourceMappingURL=DefaultController.js.map