/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { QueryParam } from '../decorator/router/query-param';
import Controller from '../decorator/router/Controller';

import { Get } from '../decorator/router/get';
import { CiredCommandEntree, CiredCommandEntreeModel, CiredFlagState, ModelTest } from '../model/cired/CiredCommandEntree.model';
import { ciredCommandService } from '../service/cired/CiredCommand.service';

@Controller('/demo')
export default class DefaultController {
  @Get('/:id([0-9])')
  // @Auth([ROLES.Administrator])
  public async getAccount(
    req: Request,
    res: Response,
    @QueryParam id: number,
  ) {

  /*  let command = new CiredCommandEntreeModel();
    command.area = 0;
    command.address = 0;
    command.command = CiredCommandEntree.writeFlagState;
    command.flagIndex = 8;
    command.flagTimer = 255;

    command.flagState = CiredFlagState.toggle;

    ciredCommandService.checkIsCommandValid(command);
//console.log(await command.send())*/

//let test = await ModelTest.findAll();
console.log(ModelTest.findAll())
    res.status(200).send()
  }
}

