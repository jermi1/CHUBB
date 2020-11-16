import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { polizasData } from '../../../../../static-data/polizas';
import { Poliza } from '../../../polizas/interfaces/poliza.interface';

import { StringMaxLenghtModule }  from '../../../../pipes/string-max-lenght/string-max-lenght.module';

import icSearch from '@iconify/icons-ic/twotone-search';
import icIcon from '@iconify/icons-ic/twotone-search';


@Component({
  selector: 'vex-referenciadores-show-polizas',
  templateUrl: './referenciadores-show-polizas.component.html',
  styleUrls: ['./referenciadores-show-polizas.component.scss']
})
export class ReferenciadoresShowPolizasComponent implements OnInit {


    icSearch = icSearch;
    icIcon = icIcon;

    tableData = polizasData;

    tableColumns: TableColumn<Poliza>[] = [
      {
        label: 'PÓLIZA',
        property: 'poliza',
        type: 'text',
        cssClasses: ['font-medium']
      },
      {
        label: 'ASEGURADORA',
        property: 'aseguradora',
        type: 'text',
        cssClasses: ['font-medium']
      },
      {
        label: 'RAMO',
        property: 'ramo',
        type: 'text',
        cssClasses: ['font-medium']
      },
      {
        label: 'VENCIMIENTO',
        property: 'vigenciaFin',
        type: 'text',
        cssClasses: ['font-medium']
      },
      {
        label: 'PROMOTOR',
        property: 'promotor',
        type: 'text',
        cssClasses: ['font-medium']
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
    this.router.navigate(['/referenciadores/show/']);
}

}
