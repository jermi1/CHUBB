import { Component, OnInit } from '@angular/core';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { renovacionesData } from '../../../../static-data/renovaciones';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { RenovacionesCreateComponent } from '../components/renovaciones-create/renovaciones-create.component';
import { Renovacion } from '../interfaces/renovacion.interface';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { Router } from '@angular/router';
import icRepeat from '@iconify/icons-ic/twotone-repeat';

import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';

import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';

@Component({
  selector: 'vex-renovaciones-table',
  templateUrl: './renovaciones-table.component.html',
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class RenovacionesTableComponent implements OnInit {

  searchCtrl = new FormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;

  activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
  tableData = renovacionesData;
  tableColumns: TableColumn<Renovacion>[] = [
    // {
    //   label: '',
    //   property: 'selected',
    //   type: 'checkbox',
    //   cssClasses: ['w-6']
    // },
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
        cssClasses: ['text-secondary']
      },
    {
      label: 'Nº PÓLIZA',
      property: 'renovacion',
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
      label: 'F. FIN',
      property: 'vigenciaFin',
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
      label: '',
      property: 'starred',
      type: 'button',
      cssClasses: ['text-secondary', 'w-10']
    },
    // {
    //   label: '',
    //   property: 'menu',
    //   type: 'button',
    //   cssClasses: ['text-secondary', 'w-10']
    // },
  ];

  icStar = icStar;
  icSearch = icSearch;
  icFolder = icFolder;
  icMenu = icMenu;
  icRepeat = icRepeat;
  icFilterList = icFilterList;
  icCloudDownload = icCloudDownload;

  constructor(private dialog: MatDialog, private router: Router,) { }

  ngOnInit() {
  }

  openRenovacion(id?: Renovacion['id']) {
    
    this.dialog.open(RenovacionesCreateComponent, {
          data: id || null,
          width: '600px'
    });
  }

  toggleStar(id: Renovacion['id']) {
    const renovacion = this.tableData.find(c => c.id === id);

    if (renovacion) {
      renovacion.starred = !renovacion.starred;
    }
  }

  setData(data: Renovacion[]) {
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
