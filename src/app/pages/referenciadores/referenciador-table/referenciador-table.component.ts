import { Component, OnInit } from '@angular/core';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { referenciadoresData } from '../../../../static-data/referenciadores';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';

import { Referenciador } from '../interfaces/referenciador.interface';
import { Router } from '@angular/router';

import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icMenu from '@iconify/icons-ic/twotone-menu';
import personPin from '@iconify/icons-ic/twotone-person-pin';

import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';


@Component({
  selector: 'vex-referenciador-table',
  templateUrl: './referenciador-table.component.html',
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class ReferenciadorTableComponent implements OnInit {

  searchCtrl = new FormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;

  activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
  tableData = referenciadoresData;
  tableColumns: TableColumn<Referenciador>[] = [
    {
      label: '',
      property: 'selected',
      type: 'checkbox',
      cssClasses: ['w-6']
    },
    {
      label: 'NAME',
      property: 'name',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'EMAIL',
      property: 'email',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'PHONE',
      property: 'phone',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: '',
      property: 'starred',
      type: 'button',
      cssClasses: ['text-secondary', 'w-10']
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
  icContacts = icContacts;
  icMenu = icMenu;
  personPin = personPin;
  icFilterList = icFilterList;
  icCloudDownload = icCloudDownload;

  constructor(private dialog: MatDialog, private router: Router, ) { }

  ngOnInit() {
  }

  openReferenciador(id?: Referenciador['id']) {
    this.router.navigate(['/referenciadores/' + id]);
  }


  setData(data: Referenciador[]) {
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

  toggleStar(id: any) {
      return false;
  }
}
