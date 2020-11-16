import { Component, OnInit, Input  } from '@angular/core';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';

import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'vex-cliente-form-archivos',
  templateUrl: './cliente-form-archivos.component.html',
  styleUrls: ['./cliente-form-archivos.component.scss'],
  animations: [fadeInRight400ms, stagger40ms]
})


export class ClienteFormArchivosComponent implements OnInit {

  icCloudUpload = icCloudUpload;
  icCloudDownload = icCloudDownload;
  icArrowDropDown = icArrowDropDown;

  documentos = [
    {
      imagen: '/assets/img/demo/archivo-1.png',
      tipo: 'Carta de nombramiento',
      descripcion: '001'
    },
    {
      imagen: '/assets/img/demo/archivo-2.png',
      tipo: 'DNI',
      descripcion: '71224189',
    },
    {
      imagen: '/assets/img/demo/archivo-3.png',
      tipo: 'Resolución',
      descripcion: 'Resolucion DS-201902-2',
    },
  ];

  personaNatural = true;
  form: MatFormFieldModule;

  cambioTipoPersona(event: any) {
    if ( event.value === 2 ) {
      this.personaNatural = false;
    } else {
      this.personaNatural = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}






