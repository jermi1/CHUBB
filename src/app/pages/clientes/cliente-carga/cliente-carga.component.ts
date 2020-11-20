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
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
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
    telefono: '(819)846-2365', 
    email: 'dennis.oliver@mail.com', 
    etiquetas: 'VIP', 
    actions: true
  }
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: '123131231', 
    documento: 'Persona Natural', 
    telefono: 'Ricardo Deza', 
    email: 'Ricardo Deza', 
    etiquetas: '19/12/2020', 
    actions: true
  },
  {
    name: '1231312', 
    documento: 'Persona Natural', 
    telefono: 'Diego Alvarado', 
    email: 'Diego Alvarado', 
    etiquetas: '19/12/2021', actions: false},
  {
    name: '12454784', 
    documento: 'Persona Jurídica', 
    telefono: 'Materia Gris', 
    email: 'Materia Gris', 
    etiquetas: '02/01/2021', 
    actions: true
  }
];

@Component({
  selector: 'vex-cliente-carga',
  templateUrl: './cliente-carga.component.html',
  styleUrls: ['./cliente-carga.component.scss']
})
export class ClienteCargaComponent implements OnInit {

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
  icCloudUpload = icCloudUpload;

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
