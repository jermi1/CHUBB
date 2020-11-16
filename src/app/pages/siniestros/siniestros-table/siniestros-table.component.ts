import { Component, OnInit } from '@angular/core';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { siniestrosData } from '../../../../static-data/siniestros';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SiniestrosCreateComponent } from '../components/siniestros-create/siniestros-create.component';
import { Siniestro } from '../interfaces/siniestro.interface';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { Router } from '@angular/router';

import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';

import carCrash from '@iconify/icons-fa-solid/car-crash';

@Component({
    selector: 'vex-siniestros-table',
    templateUrl: './siniestros-table.component.html',
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})
export class SiniestrosTableComponent implements OnInit {

    searchCtrl = new FormControl();

    searchStr$ = this.searchCtrl.valueChanges.pipe(
        debounceTime(10)
    );

    menuOpen = false;
    activeCategory: 'estado' | 'all';
    tableData = siniestrosData;
    tableColumns: TableColumn<Siniestro>[] = [
     /*   {
            label: 'ASEGURADORA',
            property: 'aseguradora',
            type: 'text',
            cssClasses: ['font-medium']
        },*/
        {
            label: 'Nº SINIESTRO',
            property: 'idSiniestro',
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
            property: 'idPoliza',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'CLIENTE',
            property: 'clienteNombre',
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
            label: 'Estado',
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

    icStar = icStar;
    icSearch = icSearch;
    icFolder = icFolder;
    icMenu = icMenu;
    carCrash = carCrash;
    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;

    constructor(private dialog: MatDialog, private router: Router, ) { }

    ngOnInit() {
    }

    rowClick(idPoliza?: Siniestro['idPoliza']) {
        if (idPoliza) {
            this.router.navigate(['/siniestros/' + idPoliza]);
        } else {
            this.dialog.open(SiniestrosCreateComponent, {
                data: idPoliza || null,
                width: '600px'
            });
        }
    }

    setData(data: Siniestro[]) {
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
