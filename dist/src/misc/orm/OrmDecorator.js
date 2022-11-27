"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Entity = void 0;
const snake_case_1 = require("snake-case");
const OrmException_1 = require("./OrmException");
const Entity = (modelDefinition) => (target) => {
    if (Reflect.hasMetadata(`orm:entity`, target)) {
        throw new OrmException_1.OrmDecoratorException(OrmException_1.OrmDecoratorException.entityAlreadyDefine, `Entity ${target.constructor} already defined`);
    }
    Reflect.defineMetadata(`orm:entity`, modelDefinition, target);
};
exports.Entity = Entity;
const Column = (columnDefinition) => (target, propertyKey) => {
    let attributeDefinition = {
        type: columnDefinition.type,
        allowNull: columnDefinition.nullable,
        primaryKey: columnDefinition.primarakey,
        field: columnDefinition.name ? columnDefinition.name : (0, snake_case_1.snakeCase)(propertyKey).toUpperCase(),
        autoIncrement: columnDefinition.autoIncrement,
    };
    Reflect.defineMetadata(`orm:attribute:${propertyKey}`, attributeDefinition, target.constructor);
};
exports.Column = Column;
//# sourceMappingURL=OrmDecorator.js.map