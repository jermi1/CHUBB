// import { Component, OnInit } from '@angular/core';
// import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
// import icEdit from '@iconify/icons-ic/twotone-edit';
// import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
// import icPhone from '@iconify/icons-ic/twotone-phone';
// import icMail from '@iconify/icons-ic/twotone-mail';
// import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
// import icSearch from '@iconify/icons-ic/twotone-search';
// import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
// import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { polizasData } from '../../../../../static-data/polizas';
import { Poliza } from '../../../polizas/interfaces/poliza.interface';
import icSearch from '@iconify/icons-ic/twotone-search';
// import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icMail from '@iconify/icons-ic/twotone-mail';

// export interface PeriodicElement {
//   poliza: string;
//   aseguradora: string;
//   ramo: string;
//   vencimiento: string;
//   estado: string;
//   promotor: string;
//   actions: boolean;
// }

// const ELEMENT_DATA_PADRE: PeriodicElement[] = [
//   {
//     poliza: '032135456456',
//     aseguradora: 'RUC 204503774622',
//     ramo: '(819)846-2365',
//     vencimiento: '20 Ene 2020',
//     estado: 'Pago al día',
//     promotor: 'Mary Patel',
//     actions: true}
// ];

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     poliza: '032135456456',
//     aseguradora: 'La Positiva',
//     ramo: 'Autos',
//     vencimiento: '20 Ene 2020',
//     promotor: 'Mary Patel',
//     estado: 'Pago al día',
//     actions: true
//   },
//   {
//     poliza: '032135456456',
//     aseguradora: 'La Positiva',
//     ramo: 'Vida',
//     vencimiento: '20 Ene 2020',
//     promotor: 'Mary Patel',
//     estado: 'Pago al día',
//     actions: true
//   },
//   {
//     poliza: '032135456456',
//     aseguradora: 'La Positiva',
//     ramo: 'SCTR',
//     vencimiento: '20 Ene 2020',
//     promotor: 'Mary Patel',
//     estado: 'Pago al día',
//     actions: true
//   }
// ];



@Component({
  selector: 'vex-cliente-show-reportes',
  templateUrl: './cliente-show-reportes.component.html',
  styleUrls: ['./cliente-show-reportes.component.scss']
})
export class ClienteShowReportesComponent implements OnInit {

    icSearch = icSearch;
    icCloudDownload = icCloudDownload;
    icMail = icMail;

    showResultTable = false;

    tableData = polizasData;
    tableColumns: TableColumn<Poliza>[] = [
       /* {
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

    constructor(private router: Router) { }

    ngOnInit() {
    }

    rowClick(id?: Number) {
        return false;
        // this.router.navigate(['/polizas/show/']);
    }

    showResult(){
        this.showResultTable = true;
    }

}
