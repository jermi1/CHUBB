import { Component, OnInit } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { cotizacionesData } from '../../../../../static-data/cotizaciones';
import { Cotizacion } from '../../../cotizaciones/interfaces/cotizacion.interface';

import { Router } from '@angular/router';

@Component({
    selector: 'vex-cliente-show-cotizaciones',
    templateUrl: './cliente-show-cotizaciones.component.html',
    styleUrls: ['./cliente-show-cotizaciones.component.scss']
})
export class ClienteShowCotizacionesComponent implements OnInit {

    icSearch = icSearch;

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
            label: 'FECHA',
            property: 'vigenciaInicio',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'PRODUCTO',
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

    constructor(private router: Router) { }

    ngOnInit() {
    }

    rowClick(id?: Number) {
        this.router.navigate(['/cotizaciones/show/']);
    }

}
