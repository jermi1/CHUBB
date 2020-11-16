import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';

import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { comisionesData } from '../../../../static-data/comisiones';
import { Comision } from '../interfaces/comision.interface';
import icSearch from '@iconify/icons-ic/twotone-search';

import { ComisionesCreateComponent } from '../components/comisiones-create/comisiones-create.component';

import coins from '@iconify/icons-fa-solid/coins';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';

// import { cierresData } from '../../../../static-data/cierres';
import { Cierre } from '../interfaces/cierre.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'vex-comisiones-pendientes',
    templateUrl: './comisiones-pendientes.component.html',
    styleUrls: ['./comisiones-pendientes.component.scss'],
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
      ]
  })
export class ComisionesPendientesComponent implements OnInit {

    icSearch = icSearch;
    coins = coins;
    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;
    icAddCircle = icAddCircle;
    aseguradoraSeleccionada = 'PE';
    tableData = comisionesData;
    tableColumns: TableColumn<Comision>[] = [
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
        // {
        //     label: 'CLIENTE',
        //     property: 'cliente',
        //     type: 'text',
        //     cssClasses: ['font-medium']
        // },
        {
            label: 'REF.',
            property: 'referenciador',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            
            label: 'FECHA',
            property: 'fecha',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'MONEDA',
            property: 'moneda',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'C. BROCKER',
            property: 'cBrocker',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'C. REF.',
            property: 'cReferenciador',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        // {
        //   label: 'F. FIN',
        //   property: 'vigenciaFin',
        //   type: 'text',
        //   cssClasses: ['text-secondary']
        // },
        // {
        //     label: 'PROMOTOR',
        //     property: 'promotor',
        //     type: 'text',
        //     cssClasses: ['text-secondary']
        // },
        {
            label: 'ESTADO',
            property: 'badges',
            type: 'state',
            cssClasses: ['text-secondary']
        },
        // {
        //     label: '',
        //     property: 'menu',
        //     type: 'button',
        //     cssClasses: ['text-secondary', 'w-10']
        // },
    ];

    searchCtrl = new FormControl();

    searchStr$ = this.searchCtrl.valueChanges.pipe(
        debounceTime(10)
    );

    constructor(
        private dialog: MatDialog,
        private router: Router) { }

    ngOnInit() {
    }

    rowClick(id?: Number) {
        console.log(id);
        // this.router.navigate(['/polizas/show/']);
    }

    openComision(id?: Cierre['id']) {
        if(id){
          this.router.navigate(['/comisiones/show']);
        } else {
          this.dialog.open(ComisionesCreateComponent, {
            data: id || null,
            width: '450px'
          });
        }
      }


}
