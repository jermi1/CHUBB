import { Component, OnInit } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TableColumn } from './../../../../@vex/interfaces/table-column.interface';
import { cotizacionesData } from './../../../../static-data/cotizaciones';
import { Cotizacion } from './../../cotizaciones/interfaces/cotizacion.interface';

import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';
import { CotizacionesCreateComponent } from '../components/cotizaciones-create/cotizaciones-create.component';

import icMenu from '@iconify/icons-ic/twotone-menu';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';

import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';

import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';

@Component({
    selector: 'vex-cliente-show-cotizaciones',
    templateUrl: './cotizaciones-table.component.html',
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})

export class CotizacionesTableComponent implements OnInit {

    icSearch = icSearch;
    icMenu = icMenu;
    icAssignment = icAssignment;
    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;


    menuOpen = false;

    tableData = cotizacionesData;
    tableColumns: TableColumn<Cotizacion>[] = [
        {
            label: 'CODIGO',
            property: 'codigo',
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
            label: 'CLIENTE',
            property: 'name',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'FECHA',
            property: 'vigenciaInicio',
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
        {
            label: '',
            property: 'menu',
            type: 'button',
            cssClasses: ['text-secondary', 'w-10']
        },
    ];

    searchCtrl = new FormControl();

    searchStr$ = this.searchCtrl.valueChanges.pipe(
        debounceTime(10)
    );

    constructor(private dialog: MatDialog, private router: Router) { }

    ngOnInit() {
    }

    rowClick(id?: Number) {
        this.router.navigate(['/cotizaciones/'+id+'/']);
    }

    openCotizacion() {
        this.dialog.open(CotizacionesCreateComponent, {
            width: '450px'
        });
    }

    setData(data: Cotizacion[]) {
        this.tableData = data;
        this.menuOpen = false;
    }

    openMenu() {
        this.menuOpen = true;
    }

    openTableFilter() {

        this.dialog.open(TableFilterComponent, {
            width: '450px'
        });
    }

}
