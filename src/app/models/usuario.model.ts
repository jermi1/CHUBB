// Referencia: https://nehalist.io/working-with-models-in-angular/

import { Deserializable } from './deserializable.model';

export class Usuario implements Deserializable {

    public id: number;
    public name: string;
    public lastname: string;
    public email: string;
    public telefono: string;
    [key: string]: any;
    
    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    getFullName() {
        return this.name + ' ------ ' + this.email;
    }

}