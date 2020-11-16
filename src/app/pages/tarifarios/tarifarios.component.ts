import { Component, OnInit } from '@angular/core';

import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../@vex/animations/fade-in-right.animation';
// import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icSearch from '@iconify/icons-ic/twotone-search';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';

import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { tarifariosData } from '../../../static-data/tarifarios';
import { Tarifario } from '../../interfaces/tarifario.interface';

import { TableFilterComponent } from '../../shared/components/table-filter/table-filter.component';

@Component({
    selector: 'vex-cliente-edit',
    templateUrl: './tarifarios.component.html',
    styleUrls: ['./tarifarios.component.scss'],
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})

export class TarifariosComponent implements OnInit {

    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;
    icSearch = icSearch;
    icSettings = icSettings;
    icAddCircle = icAddCircle;

    searchCtrl = new FormControl();

    searchStr$ = this.searchCtrl.valueChanges.pipe(
        debounceTime(10)
    );

    menuOpen = false;
    tableData = tarifariosData;
    tableColumns: TableColumn<Tarifario>[] = [
        {
            label: 'ASEGURADORA',
            property: 'aseguradora',
            type: 'text',
            cssClasses: ['font-medium', 'w-20']
        },
        {
            label: 'MONEDA',
            property: 'moneda',
            type: 'text',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: 'RAMO',
            property: 'ramo',
            type: 'text',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: 'PRODUCTO',
            property: 'producto',
            type: 'text',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: 'PLAN',
            property: 'plan',
            type: 'text',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: 'CLIENTE',
            property: 'cliente',
            type: 'text',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: 'F. INICIO',
            property: 'vigenciaInicio',
            type: 'text',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: 'F. FIN',
            property: 'vigenciaFin',
            type: 'text',
            cssClasses: ['text-secondary', 'w-10']
        },
        {
            label: 'ESTADO',
            property: 'badges',
            type: 'state',
            cssClasses: ['text-secondary', 'w-10']
        },
        
    ];

    constructor(private dialog: MatDialog, private router: Router) { }

    ngOnInit() {
    }

    rowClick(id?: Tarifario['id']) {
        this.router.navigate(['/tarifarios/editar']);
    }

    setData(data: Tarifario[]) {
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

