/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import Controller from '../core/router/Controller';
import { Get, Patch, Post } from '../core/router/Method';
import { Installation } from '../entities/Installation';
import { entityMapper } from '../tool/Mapper';
import { coordinatorService } from '../services/CoordinatorService';
import { deviceService } from 'src/services/DeviceService';


@Controller('/devices')
export default class InstallationController {

    @Get('/')
    public async getAll(
        request: Request,
        response: Response,
    ) {

    };

   
}

