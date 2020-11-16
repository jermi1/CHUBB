import { Component, OnInit } from '@angular/core';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { polizasData } from '../../../../static-data/polizas';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { PolizasCreateComponent } from '../components/polizas-create/polizas-create.component';
import { Poliza } from '../interfaces/poliza.interface';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { Router } from '@angular/router';

import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import shieldAlt from '@iconify/icons-fa-solid/shield-alt';

import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';


@Component({
    selector: 'vex-polizas-table',
    templateUrl: './polizas-table.component.html',
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})
export class PolizasTableComponent implements OnInit {

    searchCtrl = new FormControl();

    searchStr$ = this.searchCtrl.valueChanges.pipe(
        debounceTime(10)
    );

    menuOpen = false;

    activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
    tableData = polizasData;
    tableColumns: TableColumn<Poliza>[] = [
    /*    {
            label: 'ASEGURADORA',
            property: 'aseguradora',
            type: 'text',
            cssClasses: ['font-medium']
          }, */
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
            label: 'CLIENTE',
            property: 'name',
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

    icStar = icStar;
    icSearch = icSearch;
    icFolder = icFolder;
    icMenu = icMenu;
    shieldAlt = shieldAlt;
    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;

    constructor(private dialog: MatDialog, private router: Router, ) { }

    ngOnInit() {

    }

    rowClick(poliza?: Poliza['poliza']) {
        if(poliza) {
            this.router.navigate(['/polizas/' + poliza])
        } else {
            this.dialog.open(PolizasCreateComponent, {
                width: '450px'
          });
        }
        
    }

    setData(data: Poliza[]) {
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

    //   registrarPoliza() {
        
    //     this.dialog.open(PolizasCreateComponent, {
    //         width: '600px'
    //   });
    //   }

    // rowClick(id?: Number) {
    //     this.router.navigate(['/polizas/show/']);
    // }

}
