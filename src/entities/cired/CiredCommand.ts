
import { IsArray, IsString } from "class-validator";
import { CiredAddressException } from "src/exceptions";
import { CiredResponse } from "./CiredResponse";
import { CiredActionEntree, CiredAddressEntree, CiredActionSortie, CiredAddressSortie, CiredRelay, CiredFlag, CiredArea, CiredCommandType, CiredAction, CiredState, CiredAddress, CiredAddressEntreeRange, CiredAddressSortieRange, CiredAddressDmxRange } from "./describe";
import { valideCiredCommand } from "./validator";
//import { IsAction, IsAddress, IsArea, IsFlag, IsRelay, IsState, IsType } from "./validator";



export class CiredCommand {

  /**
   * 
   */
  public flag: CiredFlag;

  public relais: CiredRelay;

  public etat: CiredState;

  public temps: number

  public canal: number;
  public groupe: number;
  public zoneRgb: number;
  public valeur: number;

  /**
   * 
   */
  private cmd: CiredAction;

  private adrh: CiredArea;
  private adrl: CiredAddress;

  private type: CiredCommandType;

  private response: CiredResponse;

  public constructor (action: CiredAction) {
    this.cmd = action;
  }

  public getType() {
    return this.type;
  }

  public getAddress() {
    return this.adrl;
  }

  public getAction() {
    return this.cmd;
  }

  public setResponse(response: CiredResponse) {
    this.response = response;
  }

  public setCompleteAddress(area: CiredArea, address: CiredAddress) {
    this.adrh = area;
    this.adrl = address;

    this.type = 
    CiredAddressEntreeRange.indexOf(this.adrl) > -1 ? CiredCommandType.entree : 
    CiredAddressSortieRange.indexOf(this.adrl) > -1 ? CiredCommandType.sortie : 
    CiredAddressDmxRange.indexOf(this.adrl) > -1 ? CiredCommandType.dmx : 
    undefined;

  }

  public reset() {
    for (const property in this) {
      this[property] = undefined;

    }
  }

  public validate() {
    valideCiredCommand(this);
  }


}

