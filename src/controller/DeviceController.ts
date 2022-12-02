/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import { deviceService } from '../services/DeviceService';
import Controller from '../core/router/Controller';
import { Get, Patch, Post } from '../core/router/Method';


@Controller('/devices')
export default class DeviceController {

    @Get('/')
    public async getAll(
        request: Request,
        response: Response,
    ) {
       response.status(200).send(await deviceService.getAll());
    };

    @Get('/:deviceId([0-9]+)')
    public async getById(
        request: Request,
        response: Response,
    ) {
        response.status(200).send(await deviceService.getById(parseInt(request.params.deviceId)));
    };


}

