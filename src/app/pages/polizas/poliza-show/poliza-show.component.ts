import { Component, OnInit } from '@angular/core';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

import { ActivatedRoute } from '@angular/router';
import { polizasData } from '../../../../static-data/polizas';
import { Poliza } from '../interfaces/poliza.interface';

@Component({
  selector: 'vex-poliza-show',
  templateUrl: './poliza-show.component.html',
  styleUrls: ['./poliza-show.component.scss']
})
export class PolizaShowComponent implements OnInit {

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icArrowBackIos = icArrowBackIos;

  navLinks = Array();
  poliza: Poliza;

  currentId = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.params.id;
    var routePrefix = '/polizas/' + this.currentId;
    
   
    this.poliza = polizasData.find(p => p.id === Number(this.currentId));
  
    

    this.navLinks = [
      {
        'label': 'Poliza',
        'path': routePrefix + '/detalle'
      },
      {
        'label': 'Cliente',
        'path': routePrefix + '/cliente'
      },
      {
        'label': 'Endosos',
        'path': routePrefix + '/endosos'
      },
      /*
      {
        'label': 'Cronograma de Pagos',
        'path': routePrefix + '/cronograma-pagos'
      },
      {
        'label': 'Comisiones',
        'path': routePrefix + '/comisiones'
      },
      */
      {
        'label': 'Siniestros',
        'path': routePrefix + '/siniestros'
      },
      {
        'label': 'Evidencias',
        'path': routePrefix + '/evidencias'
      }
      /*,
      {
        'label': 'Cotizaciones',
        'path': routePrefix + '/cotizaciones'
      },
      */
    ];
  }

}
