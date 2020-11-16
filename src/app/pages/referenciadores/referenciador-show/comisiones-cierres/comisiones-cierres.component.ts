import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { cierresData } from '../../../../../static-data/cierres';

import { Cierre } from '../../../comisiones/interfaces/cierre.interface';
import icSearch from '@iconify/icons-ic/twotone-search';
import coins from '@iconify/icons-fa-solid/coins';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';

import { EditarFacturaComponent } from '../../components/editar-factura/editar-factura.component';
import { ComisionesCierresDetalleComponent } from '../comisiones-cierres/comisiones-cierres-detalle/comisiones-cierres-detalle.component';

@Component({
  selector: 'vex-comisiones-cierres',
  templateUrl: './comisiones-cierres.component.html',
  styleUrls: ['./comisiones-cierres.component.scss'],

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
        this.router.navigate(['/comisiones']);
    }

    // openComision(id?: Cierre['id']) {
    //     if (id) {
    //       this.router.navigate(['/comisiones/show']);
    //     } else {
    //       this.dialog.open(ComisionesCierresDetalleComponent, {
    //         data: id || null,
    //         width: '450px'
    //       });
    //     }
    //   }

    edit() {
        this.dialog.open(EditarFacturaComponent , {
          width: '450px'
        });
      }

}
