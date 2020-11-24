import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { DOCUMENT } from '@angular/common';

// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';


export let renovacionIdCounter = 50;

@Component({
  selector: 'vex-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})

export class TableFilterComponent implements OnInit {

  [x: string]: any;

  url: string;
  combo: any;
  icStar = icStar;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icBusiness = icBusiness;
  icSearch = icSearch;
  icEmail = icEmail;
  icPhone = icPhone;

  constructor(private dialogRef: MatDialogRef<TableFilterComponent>,
              @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit() {
    this.url = document.location.href;
    this.urlClientes(this.url);
  }

  apply() {
    this.dialogRef.close();
  }
  
  urlClientes(url)
  {
if (url === 'http://localhost:4200/clientes')
    {
      this.combo = { placeholder: 'Tipo Cliente', uno: 'Persona Natural', dos: 'Persona Jurídica'};
    }
    else if (url === 'http://localhost:4200/usuarios')
    {
      this.combo = { placeholder: 'Tipo Usuario', uno: 'Master', dos: 'Admin'};
    }
    else {
      this.combo = { placeholder: 'Ramo', uno: 'Asistencia Médica', dos: 'Accidentes Personales'};
      }
  }

  
}
