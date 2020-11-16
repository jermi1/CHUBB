import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';


import { clientesData } from '../../../../../static-data/clientes';
import { Cliente } from '../../../clientes/interfaces/cliente.interface';

@Component({
  selector: 'vex-cotizacion-show-cliente',
  templateUrl: './cotizacion-show-cliente.component.html',
  styleUrls: ['./cotizacion-show-cliente.component.scss']
})
export class CotizacionShowClienteComponent implements OnInit {

    icArrowBackIos = icArrowBackIos;

    cliente: Cliente;
    currentId = Number;

    constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.params.id ? this.route.snapshot.params.id : 1;
    if (this.currentId) {
         this.cliente = clientesData.find(c => c.id === Number(this.currentId));
     }
  }

}
