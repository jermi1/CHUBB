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
import { MatFormFieldModule } from '@angular/material/form-field';

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
    name: 'Diego Alonso Alvarado Alatrista',
    documento: 'RUC 204503774622',
    telefono: '(819)846-2365',
    email: 'dennis.oliver@mail.com',
    etiquetas: 'VIP',
    actions: true
  },
  {
    name: 'Bluebox Trading SAC',
    documento: 'DNI 45055471',
    telefono: '(017)342-8274',
    email: 'craig.rivera@mail.com',
    etiquetas: 'VIP',
    actions: true
  },
  {
    name: 'Cesar Augusto Torres Brito',
    documento: 'DNI 89299292',
    telefono: '(851)074-4972',
    email: 'johnny.palmer@mail.com',
    etiquetas: 'VIP',
    actions: true
  }
];


@Component({
  selector: 'vex-renovacion-edit',
  templateUrl: './renovacion-edit.component.html',
  styleUrls: ['./renovacion-edit.component.scss']
})


export class RenovacionEditComponent implements OnInit {

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

  personaNatural = true;

  form: MatFormFieldModule;

  displayedColumns: string[] = ['name', 'documento', 'telefono', 'email', 'etiquetas', 'actions'];
  dataSourcePadre = ELEMENT_DATA_PADRE;
  dataSource = ELEMENT_DATA;

  cambioTipoPersona(event: any) {
    if (event.value == 2) {
      this.personaNatural = false;
    } else {
      this.personaNatural = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}






