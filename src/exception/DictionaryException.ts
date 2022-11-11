/**
 * dépendances internes
 */
import { BadRequestException, NotFoundException } from './HttpException'

/**
 * 
 */
export enum  DictionaryCodeException {
    notFound = 'DICTIONARY_001',

    entryNotFound = 'DICTIONARY_100',

}

/**
 * 
 */
export class  DictionaryNotFoundException extends NotFoundException {
    constructor(code: DictionaryCodeException, message: string = "Dictionary not found") {
        super(code, message);
    }
}