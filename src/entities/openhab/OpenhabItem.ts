
export enum OpenHabItemType {
    switch = 'Switch',
    contact = 'Contact',
}

export class OpenHabItem {
    type: OpenHabItemType;
    name: string;
    label:string;
    category:string;
    tags: Array<string>
    groupNames: Array<string>
    link: string;
    state: string;
    transformedState: string;
    stateDescription: OpenHabStateDescription
    commandDescription: Array<OpenHabCommandDescription>
    metadata: Array<OpenHabMetadata>
    editable: boolean;
}

export class OpenHabStateDescription {
    minimum: number;
    maximum: number;
    step: number;
    pattern: string;
    readOnly: boolean;
    options: Array<OpenHabOptions>
}

export class OpenHabOptions {
    value: string;
    label: string;
}

export class OpenHabCommandDescription {
  
    commandOptions: Array<OpenHabCommandOption>

}

export class OpenHabCommandOption {
  
    command: string;
    label: string;

}

export class OpenHabMetadata {
    additionalProp1: object;
    additionalProp2: object;
    additionalProp3: object;
}
