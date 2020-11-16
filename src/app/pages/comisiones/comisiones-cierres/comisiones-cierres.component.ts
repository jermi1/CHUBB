import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';

import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { cierresData } from '../../../../static-data/cierres';
import { Cierre } from '../interfaces/cierre.interface';
import icSearch from '@iconify/icons-ic/twotone-search';
import coins from '@iconify/icons-fa-solid/coins';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';
import { ComisionesCreateComponent } from '../components/comisiones-create/comisiones-create.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'vex-comisiones-cierres',
    templateUrl: './comisiones-cierres.component.html',
    styleUrls: ['./comisiones-cierres.component.scss'],
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
      ]
})

export class ComisionesCierresComponent implements OnInit {

    icSearch = icSearch;
    coins = coins;
    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;
    icAddCircle = icAddCircle;

    aseguradoraSeleccionada = 'PE';
    tableData = cierresData;
    tableColumns: TableColumn<Cierre>[] = [
        {
            label: 'ASEGURADORA',
            property: 'aseguradora',
            type: 'text',
            cssClasses: ['font-medium']
        },
        {
            label: 'CÓDIGO',
            property: 'codigo',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'FACTURA',
            property: 'factura',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {

            label: 'F. INICIO',
            property: 'fechaInicio',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'F. FIN',
            property: 'fechaFin',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'SOLES',
            property: 'soles',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'DOLARES',
            property: 'dolares',
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

    constructor(
        private dialog: MatDialog,
        private router: Router) { }

    ngOnInit() {
    }

    rowClick(id?: Number) {
        console.log(id);
        this.router.navigate(['/comisiones/cierres/' + id]);
    }

    openComision(id?: Cierre['id']) {
        if (id) {
          this.router.navigate(['/comisiones/show']);
        } else {
          this.dialog.open(ComisionesCreateComponent, {
            data: id || null,
            width: '450px'
          });
        }
      }
}
