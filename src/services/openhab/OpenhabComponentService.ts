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
import { OpenHabItem, OpenHabItemType } from "../../entities/openhab/OpenhabItem";
import { entityMapper } from "../../tool/Mapper";


class OpenhabComponentService implements ComponentServiceInterface {

    
    public async upsertAllByDevice(device: DeviceModel) {

 
        if (device.type != DeviceType.openhab) {

            throw new DeviceException(DeviceException.badType, `Device type must be ${DeviceType.openhab}`)
        } 

        this.upsertByDevice(device)
    }

    public async upsertByDevice(device : DeviceModel) {
        let item: OpenHabItem = await entityMapper(OpenHabItem, device.information);
        
        let component: Component = new Component();
        if (item.type == OpenHabItemType.switch) {
            component.type = ComponentType.openhabSwitch;
            component.alias = `component_${device.address}_${component.type}_0`;
            component.name = `Address ${device.address} - 0`;
            component.index = 0;
        }

        if (!component.type) {
            return
        }

        let componentModel: ComponentModel = await componentRepository.create(component)
        componentModel.$set('device', device);
        componentModel.save();
    }



}

export const openhabComponentService: OpenhabComponentService = new OpenhabComponentService();