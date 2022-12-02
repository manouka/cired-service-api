/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import Controller from '../core/router/Controller';
import { Delete, Get, Patch, Post, Put } from '../core/router/Method';
import { entityMapper } from '../tool/Mapper';

import { Coordinator } from '../entities/Coordinator';

import { coordinatorService } from '../services/CoordinatorService';
import { deviceService } from '../services/DeviceService';
import { DeviceModel } from '../models/database/DeviceModel';


@Controller('/coordinators')
export default class CoordinatorController {

    @Post('/')
    public async create(
        request: Request,
        response: Response,
    ) {
        coordinatorService.upsert(await entityMapper(Coordinator, request.body)).then(() => {
            response.status(201).send()
        }).catch((error) => {
            response.status(400).send(error)
        });       
    };

    @Get('/')
    public async getAll(
        request: Request,
        response: Response,
    ) {
        response.status(200).send(await coordinatorService.getAll())
    };

    @Get('/:id([0-9]+)')
    public async getById(
        request: Request,
        response: Response,
    ) {
        response.status(200).send(await coordinatorService.getById(parseInt(request.params.id)))
    };

    @Put('/:id([0-9]+)')
    public async updateById(
        request: Request,
        response: Response,
    ) {
        coordinatorService.upsert(await entityMapper(Coordinator, request.body));

        response.status(200).send()
    };

    @Delete('/:id([0-9]+)')
    public async deleteById(
        request: Request,
        response: Response,
    ) {
        coordinatorService.deleteById(parseInt(request.params.id)).then(() => {
            response.status(201).send()
        }).catch((error) => {
            response.status(400).send(error)
        });

        response.status(200).send()
    };

    @Get('/:id([0-9]+)/devices')
    public async getAllDevices(
        request: Request,
        response: Response
    ) {
        let coordinator: Coordinator = await coordinatorService.getById(parseInt(request.params.id));
        if (typeof request.query.scan != 'undefined') {
            deviceService.scanAllDevices(coordinator);    
        }

        response.status(200).send(await deviceService.getAllByCoordinatorId(coordinator.id));
    };

}

