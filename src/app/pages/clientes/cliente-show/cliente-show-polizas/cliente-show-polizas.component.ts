import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { polizasData } from '../../../../../static-data/polizas';
import { Poliza } from '../../../polizas/interfaces/poliza.interface';
import icSearch from '@iconify/icons-ic/twotone-search';


@Component({
    selector: 'vex-cliente-show-polizas',
    templateUrl: './cliente-show-polizas.component.html',
    styleUrls: ['./cliente-show-polizas.component.scss']
})
export class ClienteShowPolizasComponent implements OnInit {

    icSearch = icSearch;

    tableData = polizasData;
    tableColumns: TableColumn<Poliza>[] = [
       /*
        {
            label: 'ASEGURADORA',
            property: 'aseguradora',
            type: 'text',
            cssClasses: ['font-medium']
          },
          */
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
        this.router.navigate(['/polizas/show/']);
    }

}
