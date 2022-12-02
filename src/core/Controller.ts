import { Request, Response, NextFunction, Router } from 'express';
import { GenericException } from '../exceptions';
import CoordinatorController from '../controller/CoordinatorController';
import DeviceController from '../controller/DeviceController';
import InstallationController from '../controller/InstallationController';
import RouteDefinition from './router/Definition';


const Routes: Array<any> = [
  CoordinatorController,
  DeviceController,
  InstallationController,
];


const registerRoutes = () => {

  console.log('Registring routes');

  const router = Router();

  Routes.forEach((Controler) => {
    // This is our instantiated class

    const instance = new Controler();

    // The prefix saved to our Controler

    const prefix = Reflect.getMetadata('prefix', Controler);

    // Our `routes` array containing all our routes for this Controler

    const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', Controler);

    // Iterate over all routes and register them to our express application

    routes.forEach((route) => {


      const url = prefix + route.path;

      type PromesseFn = (req: Request, res: Response, next: NextFunction, ...args: Array<unknown>) => Promise<unknown>;

      const p: unknown = instance[route.methodName as keyof typeof instance];
      const fn: PromesseFn = p as PromesseFn;

      // getting method from the route to use the correct method from the object
      const { requestMethod } = route;

      // generating Authentification with the parameter
      //const authMethod = createAuthMethod(Auth);

      // building the standart Request for the controllers
      const controllerMethod = (req: Request, res: Response, next: NextFunction, ...args: Array<unknown>) => {
        // authentification of the user
        // if (authMethod(res.locals.roles)) {

        fn(req, res, next, ...args).catch((error) => {

          if (error instanceof GenericException) {
            if (error.code) {
              res.status(error.status).send({ code: error.code, message: error.message });
            } else {
              res.status(error.status).send({ message: error.message });
            }
          } else {
            res.status(400).send({ code: error.code, message: error.message });
          }
        })


        /*} else {
          res.status(401).send('You are not allowed here');
        }*/
      };

      // updating routers according to request method
      let args: Array<unknown> = [1, 2, 3];
      router.route(url)[requestMethod]((req: Request, res: Response, next: NextFunction, ...args) => {
        controllerMethod(req, res, next, ...args);
      });
    });
  });

  return router;
};

export default { registerRoutes };
