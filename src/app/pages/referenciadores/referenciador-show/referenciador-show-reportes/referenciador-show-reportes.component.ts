import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { polizasData } from '../../../../../static-data/polizas';
import { Poliza } from '../../../polizas/interfaces/poliza.interface';
import icSearch from '@iconify/icons-ic/twotone-search';

import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icMail from '@iconify/icons-ic/twotone-mail';

@Component({
  selector: 'vex-referenciador-show-reportes',
  templateUrl: './referenciador-show-reportes.component.html',
  styleUrls: ['./referenciador-show-reportes.component.scss']
})
export class ReferenciadorShowReportesComponent implements OnInit {


  icSearch = icSearch;
    icCloudDownload = icCloudDownload;
    icMail = icMail;

    showResultTable = false;

    tableData = polizasData;
    tableColumns: TableColumn<Poliza>[] = [
        {
            label: 'ASEGURADORA',
            property: 'aseguradora',
            type: 'text',
            cssClasses: ['font-medium']
          },
          {
            label: 'RAMO',
            property: 'ramo',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'Nº PÓLIZA',
            property: 'poliza',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'F. INICIO',
            property: 'vigenciaInicio',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
          label: 'F. FIN',
          property: 'vigenciaFin',
          type: 'text',
          cssClasses: ['text-secondary']
        },
        {
            label: 'PROMOTOR',
            property: 'promotor',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'ESTADO',
            property: 'badges',
            type: 'state',
            cssClasses: ['text-secondary']
        },
        
    ];

    searchCtrl = new FormControl();

    searchStr$ = this.searchCtrl.valueChanges.pipe(
        debounceTime(10)
    );


  constructor() { }

  ngOnInit() {
    
  }

  rowClick(id?: Number) {
    return false;
  }

  showResult(){
      this.showResultTable = true;
  }

}
