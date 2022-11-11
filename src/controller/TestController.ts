/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { QueryParam } from '../decorator/router/query-param';
import Controller from '../decorator/router/Controller';
import { Get } from '../decorator/router/get';


@Controller('/test')
export default class TestController {
  @Get('/:id([0-9])')
  // @Auth([ROLES.Administrator])
  public getAccount(
    req: Request,
    res: Response,
    @QueryParam id: number,
  ) {
    res.status(200).send()
  }
}

