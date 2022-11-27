// Decorator/Get.ts

import 'reflect-metadata';
import RouteDefinition from './Definition';
import { applyBody } from './Body';
import { applyQueryParams } from './QueryParam';

export const Get = (path: string) => (
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<Function>,
): void => {
  // To prevent any further validation simply set it to an empty array here.
  if (!Reflect.hasMetadata('routes', target.constructor)) {
    Reflect.defineMetadata('routes', [], target.constructor);
  }
  // Get the routes stored so far, extend it by the new route and re-set the metadata.
  const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;

  // applying Queryparams
  //applyQueryParams(target, propertyKey, descriptor);
  let currentRoute = routes.find((r) => r.methodName === propertyKey);

  if (currentRoute === undefined) {
    currentRoute = {
      path,
      requestMethod: 'get',
      methodName: propertyKey,
     // Auth: [],
    };
    routes.push(currentRoute);
  } else {
    currentRoute.path = path;
    currentRoute.methodName = propertyKey;
    currentRoute.path = path;
  }
  Reflect.defineMetadata('routes', routes, target.constructor);
};

export const Post = (path: string) => (
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<Function>,
): void => {
  // To prevent any further validation simply set it to an empty array here.
  if (!Reflect.hasMetadata('routes', target.constructor)) {
    Reflect.defineMetadata('routes', [], target.constructor);
  }

  applyBody(target, propertyKey, descriptor);

  // Get the routes stored so far, extend it by the new route and re-set the metadata.
 /* const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;

  descriptor.value = function (...args: any[]) {


  //  let index = Reflect.getOwnMetadata('body-index', target, propertyKey);
    console.log(target.constructor)
  }
  //applyBody(target, propertyKey, descriptor);

  routes.push({
    path,
    requestMethod: 'post',
    methodName: propertyKey,
    //Auth: [],
  });
  Reflect.defineMetadata('routes', routes, target.constructor);*/

  const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;

  // applying Queryparams
  //applyQueryParams(target, propertyKey, descriptor);
  let currentRoute = routes.find((r) => r.methodName === propertyKey);

  if (currentRoute === undefined) {
    currentRoute = {
      path,
      requestMethod: 'post',
      methodName: propertyKey,
     // Auth: [],
    };
    routes.push(currentRoute);
  } else {
    currentRoute.path = path;
    currentRoute.methodName = propertyKey;
    currentRoute.path = path;
  }
  Reflect.defineMetadata('routes', routes, target.constructor);


};

export const Patch = (path: string) => (
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<Function>,
): void => {
  // To prevent any further validation simply set it to an empty array here.
  if (!Reflect.hasMetadata('routes', target.constructor)) {
    Reflect.defineMetadata('routes', [], target.constructor);
  }

  // Get the routes stored so far, extend it by the new route and re-set the metadata.
  const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;

  // applyQueryParams(target, propertyKey, descriptor);
  // applyBody(target, propertyKey, descriptor);

  routes.push({
    requestMethod: 'patch',
    path,
    methodName: propertyKey,
    //Auth: [],
  });
  Reflect.defineMetadata('routes', routes, target.constructor);
};

export const Put = (path: string) => (
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<Function>,
): void => {
  // To prevent any further validation simply set it to an empty array here.
  if (!Reflect.hasMetadata('routes', target.constructor)) {
    Reflect.defineMetadata('routes', [], target.constructor);
  }

  // Get the routes stored so far, extend it by the new route and re-set the metadata.
  const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;

  // applyQueryParams(target, propertyKey, descriptor);
  // applyBody(target, propertyKey, descriptor);

  routes.push({
    requestMethod: 'put',
    path,
    methodName: propertyKey,
    //Auth: [],
  });
  Reflect.defineMetadata('routes', routes, target.constructor);
};

export const Delete = (path: string) => (
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<Function>,
): void => {
  // To prevent any further validation simply set it to an empty array here.
  if (!Reflect.hasMetadata('routes', target.constructor)) {
    Reflect.defineMetadata('routes', [], target.constructor);
  }

  // Get the routes stored so far, extend it by the new route and re-set the metadata.
  const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;

  // applyQueryParams(target, propertyKey, descriptor);
  // applyBody(target, propertyKey, descriptor);

  routes.push({
    requestMethod: 'delete',
    path,
    methodName: propertyKey,
    //Auth: [],
  });
  Reflect.defineMetadata('routes', routes, target.constructor);
};


export default { Get, Post, Patch, Put, Delete};
