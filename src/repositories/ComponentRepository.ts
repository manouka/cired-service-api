
import { CoordinatorModel } from "../models/database/CoordinatorModel";
import { Device } from "../entities/Device";
import { ComponentModel } from "../models/database/ComponentModel";
import { Component } from "../entities/Component";

class ComponentRepository {

    public async create(component: Component): Promise<ComponentModel> {

        const [componentModel, created] = await ComponentModel.findOrCreate({
            where: { alias: component.alias },
            defaults: <any>component
        });

        return componentModel;
    }

    public async findById(deviceId: number): Promise<ComponentModel> {

        return await ComponentModel.findByPk(deviceId);
    }

    public async findAll(): Promise<Array<ComponentModel>> {

        return await ComponentModel.findAll();
    }

    
}

export const componentRepository: ComponentRepository = new ComponentRepository();