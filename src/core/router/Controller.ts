// Decorator/Controller.ts
import 'reflect-metadata';

const Controller = (prefix: string = ''): ClassDecorator => (target: any) => {
  Reflect.defineMetadata('prefix', prefix, target);

  if (!Reflect.hasMetadata('routes', target)) {
    Reflect.defineMetadata('routes', [], target);
  }
};

export default Controller;
