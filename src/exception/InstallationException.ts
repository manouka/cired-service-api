import { BadRequestException, NotFoundException } from './HttpException'

export enum InstallationCodeException {
    notFound = 'INSTALLATION_001',

}

export class  InstallationNotFoundException extends NotFoundException {
    constructor(code: InstallationCodeException = InstallationCodeException.notFound, message: string = "Installation not found") {
        super(code, message);
    }
}