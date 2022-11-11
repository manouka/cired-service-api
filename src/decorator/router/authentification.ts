/*import { ROLES } from '../../configuration';
import RouteDefinition from '../types';

export const Auth = (roles: Array<ROLES>): MethodDecorator => (target, propertyKey: string): void => {
  if (!Reflect.hasMetadata('routes', target.constructor)) {
    Reflect.defineMetadata('routes', [], target.constructor);
  }

  const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
  let currentRoute = routes.find((r) => r.methodName === propertyKey);
  if (currentRoute === undefined) {
    currentRoute = {
      path: undefined,
      requestMethod: 'get',
      methodName: propertyKey,
      Auth: roles,
    };
    routes.push(currentRoute);
  } else { currentRoute.Auth = roles; }
  Reflect.defineMetadata('routes', routes, target.constructor);
};

export default {
  Auth,
};
*/