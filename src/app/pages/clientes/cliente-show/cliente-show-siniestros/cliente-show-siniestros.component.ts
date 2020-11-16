import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { siniestrosData } from '../../../../../static-data/siniestros';
import { Siniestro } from '../../../siniestros/interfaces/siniestro.interface';
import icSearch from '@iconify/icons-ic/twotone-search';

@Component({
    selector: 'vex-cliente-show-siniestros',
    templateUrl: './cliente-show-siniestros.component.html',
    styleUrls: ['./cliente-show-siniestros.component.scss']
})

export class ClienteShowSiniestrosComponent implements OnInit {

    icSearch = icSearch;

    tableData = siniestrosData;
    tableColumns: TableColumn<Siniestro>[] = [
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
            label: 'PÓLIZA',
            property: 'idPoliza',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'N. SINIESTRO',
            property: 'idSiniestro',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'F. OCURRENCIA',
            property: 'fechaOcurrencia',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'F. DENUNCIA',
            property: 'fechaDenuncia',
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

    constructor(private router: Router) { }

    ngOnInit() {
    }

    rowClick(id?: Number) {
        this.router.navigate(['/siniestros/show/']);
    }
    
}
