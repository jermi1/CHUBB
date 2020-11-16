import { Component, Input, OnInit } from '@angular/core';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';

import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Cliente } from '../../../../pages/clientes/interfaces/cliente.interface';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'vex-cliente-form-general',
    templateUrl: './cliente-form-general.component.html',
    styleUrls: ['./cliente-form-general.component.scss'],
    animations: [fadeInRight400ms, stagger40ms]
})

export class ClienteFormGeneralComponent implements OnInit {

    @Input() cliente: Cliente;

    personaNatural: boolean;

    form: MatFormFieldModule;

    cambioTipoPersona(event: any) {
        this.toogleTipoPersona(event.value)
    }

    toogleTipoPersona(id: number) {
        if (id == 2) {
            this.personaNatural = false;
        } else {
            this.personaNatural = true;
        }
    }

    fechaIngreso: any;
    fechaNacimiento: any;
    serializedDate = new FormControl((new Date()).toISOString());
    constructor() { }

    ngOnInit() {

        console.log(this.serializedDate);
        this.fechaIngreso= new FormControl(new Date(this.cliente.fechaIngreso))
        
        if(typeof this.cliente.fechaNacimiento !== 'undefined'){
            this.fechaNacimiento= new FormControl(new Date(this.cliente.fechaNacimiento))
        } else {
            this.fechaNacimiento= new FormControl(new Date())
        }

        this.toogleTipoPersona(this.cliente.tipo.id)
    }

}