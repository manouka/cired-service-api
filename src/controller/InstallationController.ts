/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import Controller from '../core/router/Controller';
import { Get, Patch, Post } from '../core/router/Method';
import { Installation } from '../entities/Installation';
import { entityMapper } from '../tool/Mapper';
import { installationService } from '../services/InstallationService';
import { coordinatorService } from '../services/CoordinatorService';
import { deviceService } from '../services/DeviceService';

@Controller('/installation')
export default class InstallationController {

    @Post('/')
    public async create(
        request: Request,
        response: Response,
    ) {

        let installation: Installation = await entityMapper(Installation, request.body);

        installationService.create(installation);

        response.status(201).send()
    };

    @Get('/')
    public async getAll(
        request: Request,
        response: Response,
    ) {
        
        /*let command = new CiredCommand(CiredActionEntree.writeFlagState);
        command.setCompleteAddress(1, 10)
     
        command.flag = CiredFlag.flag_1;
        command.etat = CiredState.clear;
        command.validate();
      //  command.reset()
console.log(command)

       let command1 = new CiredCommand(CiredActionSortie.readRelayState);
       command1.setCompleteAddress(1, 240)
       command1.relais = CiredRelay.relais_1;

        command1.validate();
     
        console.log(command1)

        //command.reset();*/

        response.status(200).send(await installationService.getAll())
    };

    @Get('/:installationId([0-9]+)')
    public async getById(
        request: Request,
        response: Response,
    ) {
        response.status(200).send(await installationService.getById(parseInt(request.params.installationId)))
    };

    @Patch('/:installationId([0-9]+)')
    public async update(
        request: Request,
        response: Response,
    ) {

        let installation: Installation = await entityMapper(Installation, request.body);
        installation.id = parseInt(request.params.installationId);

        installationService.update(installation);

        response.status(200).send()
    };

    @Get('/:installationId([0-9]+)/coordinators')
    public async getAllCoordinator(
        request: Request,
        response: Response,
    ) {

        response.status(200).send(await coordinatorService.getAllByInstallationId(parseInt(request.params.installationId)))
    };

    @Get('/:installationId([0-9]+)/devices')
    public async getAllDevices(
        request: Request,
        response: Response,
    ) {

        response.status(200).send(await deviceService.getAllByInstallationId(parseInt(request.params.installationId)))
    };

    @Patch('/:installationId([0-9]+)/coordinators/:coordinatorId([0-9]+)')
    public async addCoordinator(
        request: Request,
        response: Response,
    ) {
        coordinatorService.assignToInstallation(parseInt(request.params.installationId), parseInt(request.params.coordinatorId));

        response.status(200).send()
    };
}

