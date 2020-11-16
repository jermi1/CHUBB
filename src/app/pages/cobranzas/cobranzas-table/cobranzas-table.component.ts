import { Component, OnInit } from '@angular/core';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { cobranzasData } from '../../../../static-data/cobranzas';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { CobranzasCreateComponent } from '../components/cobranzas-create/cobranzas-create.component';
import { Cobranza } from '../interfaces/cobranza.interface';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import { Router } from '@angular/router';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icRefresh from '@iconify/icons-ic/twotone-refresh';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';

import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';


import { FilePickerComponent } from '../../../shared/components/file-picker/file-picker.component';

@Component({
  selector: 'vex-cobranzas-table',
  templateUrl: './cobranzas-table.component.html',
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class CobranzasTableComponent implements OnInit {

  searchCtrl = new FormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;

  // id: 1,
  // cobranza: '400388544442',
  // name: 'Elizabeth McCoy',
  // aseguradora: 'La Positiva',
  // ramo: 'Autos',
  // vigenciaInicio: '20/01/2019',
  // vigenciaFin: '20/01/2020',
  // promotor: 'Chad Roberts',
  // porVender: false
    
  // Cliente
  // Producto
  // Estado X
  // Estado
  // Vencimiento
  // Documento
  // Fecha
  // Venc/Pago
  // Soles
  // Dólares

  // id: 1,
  //   cliente: 'Elizabeth McCoy',
  //   producto: 'Salud Red Médica',
  //   poliza: '234323',
  //   documento: '450554711',
  //   vencimientoPago: '20/01/2020',
  //   soles: 568.81,
  //   dolares: 0,
  //   solesCobranza: 98.81,
  //   dolaresCobranza: 0,
  //   estado: true

  activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
  tableData = cobranzasData;
  tableColumns: TableColumn<Cobranza>[] = [
    {
      label: 'CLIENTE',
      property: 'cliente',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'PRODUCTO',
      property: 'producto',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'DOCUMENTO',
      property: 'documento',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'VENCIMIENTO / PAGO',
      property: 'vencimientoPago',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
        label: 'ALERTA',
        property: 'vencimientoDias',
        type: 'dayAlert',
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

  icStar = icStar;
  icSearch = icSearch;
  icFolder = icFolder;
  icMenu = icMenu;
  icCloudUpload = icCloudUpload;
  icRefresh = icRefresh;
  icReceipt = icReceipt;
  icFilterList = icFilterList;
  icCloudDownload = icCloudDownload;
  icArrowDropDown = icArrowDropDown;
  
  constructor(private dialog: MatDialog, private router: Router,) { }

  ngOnInit() {
  }

  openCobranza(id?: Cobranza['id']) {
    if(id){
      this.router.navigate(['/cobranzas/show']);
    } else {
      this.dialog.open(CobranzasCreateComponent, {
        data: id || null,
        width: '600px'
      });
    }
  }

  // toggleStar(id: Cobranza['id']) {
  //   const cobranza = this.tableData.find(c => c.id === id);

  //   // if (cobranza) {
  //   //   cobranza.starred = !cobranza.starred;
  //   // }
  // }

  rowClick(id?: Cobranza['id']) {
      console.log(id);
    // this.router.navigate(['/cobranzas/' + id]);
}

  setData(data: Cobranza[]) {
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


  pickFile () {
    this.dialog.open(FilePickerComponent, {
        width: '650px'
  });
}

 

}
