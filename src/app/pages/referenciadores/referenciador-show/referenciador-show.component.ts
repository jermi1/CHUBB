import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
import icSearch from '@iconify/icons-ic/twotone-search';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';

import { ActivatedRoute } from '@angular/router';

import { polizasData } from './../../../../static-data/polizas';
import { Poliza } from '../../polizas/interfaces/poliza.interface';


@Component({
  selector: 'vex-referenciador-show',
  templateUrl: './referenciador-show.component.html',
  styleUrls: ['./referenciador-show.component.scss']
})
export class ReferenciadorShowComponent implements OnInit {

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icArrowBackIos = icArrowBackIos;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icCloudDownload = icCloudDownload;

  navLinks = Array();
  poliza: Poliza;

  currentId = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.params.id;
    var routePrefix = '/referenciadores/' + this.currentId;

      this.poliza = polizasData.find(r => r.id === Number(this.currentId));

    this.navLinks = [
      {
        'label': 'Polizas',
        'path': routePrefix + '/polizas',
        'active': true
      },
      {
        'label': 'Cotizaciones',
        'path': routePrefix + '/cotizaciones',
        'active': false
      },
      {
        'label': 'Siniestros',
        'path': routePrefix + '/siniestros',
        'active': false
      },
      {
        'label': 'Reportes',
        'path': routePrefix + '/reportes',
        'active': false
      },
      {
        'label': 'Comisiones',
        'path': routePrefix + '/comisiones',
        'active': false
      },
    ];
  }
  getStateBadged(): String {
    return this.poliza.badges[0].text;
}

}
