import { Component, OnInit } from '@angular/core';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
import { ActivatedRoute } from '@angular/router';
import { clientesData } from '../../../../static-data/clientes';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'vex-cliente-show',
  templateUrl: './cliente-show.component.html',
  styleUrls: ['./cliente-show.component.scss']
})
export class ClienteShowComponent implements OnInit {

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icArrowBackIos = icArrowBackIos;
  
  navLinks= Array();
  cliente: Cliente;

  currentId = Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.params.id;
    var routePrefix = '/clientes/' + this.currentId;

    console.log(this.currentId);

    if (this.currentId) {
      this.cliente = clientesData.find(c => c.id === Number(this.currentId));
    }

    // console.log(this.cliente);

    this.navLinks = [
      {
        'label': 'Pólizas',
        'path': routePrefix + '/polizas'
      },
    /*  {
        'label': 'Cotizaciones',
        'path': routePrefix + '/cotizaciones'
      },
      */
      {
        'label': 'Siniestros',
        'path': routePrefix + '/siniestros'
      },
      {
        'label': 'Reportes',
        'path': routePrefix + '/reportes'
      }
    ];
  }
}
