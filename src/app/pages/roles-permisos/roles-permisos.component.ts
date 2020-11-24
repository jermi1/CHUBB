import { Component, OnInit } from '@angular/core';
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
import icpeople from '@iconify/icons-ic/people';

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
  {
    name: 'Materia Gris SAC',
    documento: 'RUC 204503774622',
    telefono: 'Activo',
    email: 'dennis.oliver@mail.com',
    etiquetas: 'VIP',
    actions: true
  }
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Diego Alonso Alvarado Alatrista',
    documento: 'DieAlv',
    telefono: 'Activo',
    email: 'Master',
    etiquetas: '08/10/2020', actions: true},
  {
    name: 'Ricardo Deza',
    documento: 'RDeza1',
    telefono: 'Activo',
    email: 'Administrador',
    etiquetas: '12/10/2020',
    actions: true
  },
  {
    name: 'Cesar Augusto Torres Brito',
    documento: 'Cesar1',
    telefono: 'Activo',
    email: 'Administrador',
    etiquetas: '23/11/2020',
    actions: true
  }
];


@Component({
  selector: 'vex-cliente-edit',
  templateUrl: './roles-permisos.component.html',
  styleUrls: ['./roles-permisos.component.scss']
})


export class RolesPermisosComponent implements OnInit {

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icArrowBackIos = icArrowBackIos;
  icMap = icMap;
  icSearch = icSearch;
  icCloudDownload = icCloudDownload;
  icArrowDropDown = icArrowDropDown;
  icPeople = icpeople;
  

  personaNatural = true;

  form: MatFormFieldModule;

  displayedColumns: string[] = ['name', 'documento', 'telefono', 'email', 'etiquetas', 'actions'];
  dataSourcePadre = ELEMENT_DATA_PADRE;
  dataSource = ELEMENT_DATA;

  cambioTipoPersona(event: any) {
    if(event.value == 2) {
      this.personaNatural = false;
    } else {
      this.personaNatural = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}






