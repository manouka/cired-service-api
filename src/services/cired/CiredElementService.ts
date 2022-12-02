import { Device, DeviceInterface, DeviceType } from "../../entities/Device";

import { ComponentServiceInterface } from "../ComponentService";
import { ComponentException } from "../../exceptions/ComponentException";
import { DeviceException } from "../../exceptions/DeviceExceptions";
import { CiredActionSortie, CiredAddressDmxRange, CiredAddressEntreeRange, CiredAddressSortieRange, ciredDmxChannel, ciredDmxGroup, CiredFlag, ciredFlagExclusif, CiredRelay, ciredRgbGroup } from "../../entities/cired/describe";
import { DeviceModel } from "../../models/database/DeviceModel";
import { Component, ComponentType } from "../../entities/Component";
import { ComponentModel } from "../../models/database/ComponentModel";
import { componentRepository } from "../../repositories/ComponentRepository";
import { getEnumeratorKeys, getEnumeratorValues } from "../../tool/Convertor";


class CiredElementService {

    

}

export const ciredElementService: CiredElementService = new CiredElementService();