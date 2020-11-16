import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

import { clientesData } from '../../../../static-data/clientes';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
    selector: 'vex-cliente-edit',
    templateUrl: './cliente-edit.component.html',
    styleUrls: ['./cliente-edit.component.scss']
})

export class ClienteEditComponent implements OnInit {

    icArrowBackIos = icArrowBackIos;

    cliente: Cliente;
    currentId = Number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {

         this.currentId = this.route.snapshot.params.id ? this.route.snapshot.params.id : 1;

        // // if(this.currentId == undefined){
        // //     this.currentId = 1;
        // // }
        // // console.log(this.currentId);

        if (this.currentId) {
             this.cliente = clientesData.find(c => c.id === Number(this.currentId));
         }

    }

}

