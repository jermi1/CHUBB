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
  estado: string;
  email: string;
  etiquetas: string;
  actions: boolean;
}

const ELEMENT_DATA_PADRE: PeriodicElement[] = [
  {
    name: 'Materia Gris SAC', 
    documento: 'RUC 204503774622', 
    estado: 'Activo', 
    email: 'dennis.oliver@mail.com', 
    etiquetas: 'VIP', 
    actions: true
  }
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: '123131231', 
    documento: 'Asistencia Médica', 
    estado: 'Activo', 
    email: '2123132', 
    etiquetas: '19/12/2020', 
    actions: true
  },
  {
    name: '1231312', 
    documento: 'Asistencia Médica', 
    estado: 'Activo', 
    email: '21541232', 
    etiquetas: '19/12/2021', actions: false},
  {
    name: '12454784', 
    documento: 'Asistencia Médica', 
    estado: 'Activo', 
    email: '1234569', 
    etiquetas: '02/01/2021', 
    actions: true
  }
];

@Component({
  selector: 'vex-siniestro-show-carga',
  templateUrl: './siniestro-show-carga.component.html',
  styleUrls: ['./siniestro-show-carga.component.scss']
})
export class SiniestroShowCargaComponent implements OnInit {

  icMoreVesrt = icMoreVert;
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
