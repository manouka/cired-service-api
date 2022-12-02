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


class CiredComponentService implements ComponentServiceInterface {

    
    public async upsertAllByDevice(device: DeviceModel) {

        
        if (device.type != DeviceType.cired) {

            throw new DeviceException(DeviceException.badType, `Device type must be ${DeviceType.cired}`)
        } 

        this.upsertByDevice(device)
    }

    public async upsertByDevice(device : DeviceModel) {
        let componentsMap = new Map();

        if (CiredAddressEntreeRange.includes(parseInt(device.address))) {
            componentsMap.set(ComponentType.ciredEntreeFlag, CiredFlag);
            componentsMap.set(ComponentType.ciredEntreeFlagExclusif, ciredFlagExclusif);
            componentsMap.set(ComponentType.ciredEntreeLoop, {'loop' : 0});    
        } else if (CiredAddressSortieRange.includes(parseInt(device.address))) {
            componentsMap.set(ComponentType.ciredSortieRelay, CiredRelay); 
        } else if (CiredAddressDmxRange.includes(parseInt(device.address))) {
            componentsMap.set(ComponentType.ciredDmxChannel, ciredDmxChannel); 
            componentsMap.set(ComponentType.ciredDmxGroup, ciredDmxGroup); 
            componentsMap.set(ComponentType.ciredDmxGroupRgb, ciredRgbGroup); 
        }

        componentsMap.forEach(async (componentMap, componentType) => {
            let values = getEnumeratorValues(componentMap);
            let keys = getEnumeratorKeys(componentMap)

            for (let i = 0 ; i < values.length ; i++) {
                let component: Component = new Component();
                component.alias = `component_${device.address}_${componentType}_${values[i]}`;
                component.name = `Address ${device.address} - ${keys[i]}`;
                component.type = componentType;
                component.index = parseInt(values[i]);

                let componentModel: ComponentModel = await componentRepository.create(component)
                componentModel.$set('device', device);
                componentModel.save();
            } 
        });
    }



}

export const ciredComponentService: CiredComponentService = new CiredComponentService();