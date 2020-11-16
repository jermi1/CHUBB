import { Component, OnInit } from '@angular/core';

import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';

import { stagger40ms } from '../../../../@vex/animations/stagger.animation';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
import icMap from '@iconify/icons-ic/twotone-map';
import icSearch from '@iconify/icons-ic/twotone-search';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  documento: string;
  telefono: string;
  email: string;
  etiquetas: string;
  actions: boolean;
}

const ELEMENT_DATA_PADRE: PeriodicElement[] = [
  {name: 'Materia Gris SAC',
  documento: 'RUC 204503774622',
  telefono: '(819)846-2365',
  email: 'dennis.oliver@mail.com',
  etiquetas: 'VIP',
  actions: true}
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: '0001',
    documento: 'Asistencia Médica',
    telefono: '123412141',
    email: '10/08/2020',
    etiquetas: 'Terminado', actions: true
  },

  {
    name: '0002',
    documento: 'Accidentes Personales',
    telefono: '113428274',
    email: '31/10/2020',
    etiquetas: 'Terminado',
    actions: true
  },

  {
    name: '0003',
    documento: 'Asistencia Médica',
    telefono: '121074972',
    email: '01/11/2020',
    etiquetas: 'Terminado',
    actions: true
  }
];

@Component({
  selector: 'vex-poliza-view',
  templateUrl: './poliza-view.component.html',
  styleUrls: ['./poliza-view.component.scss']
})
export class PolizaViewComponent implements OnInit {

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icArrowBackIos = icArrowBackIos;
  icSearch = icSearch;
  icCloudDownload = icCloudDownload;
  icArrowDropDown = icArrowDropDown;
  icMap = icMap;

  personaNatural = true;

  form: MatFormFieldModule;

  displayedColumns: string[] = ['name', 'documento', 'telefono', 'email', 'etiquetas', 'actions'];
  dataSourcePadre = ELEMENT_DATA_PADRE;
  dataSource = ELEMENT_DATA;

  cambioTipoPersona(event: any) {
    if (event.value === 2) {
      this.personaNatural = false;
    } else {
      this.personaNatural = true;
    }
  }

  // selected = '2';

  constructor() { }

  ngOnInit() {
  }

}
