import { Component, OnInit } from '@angular/core';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icSearch from '@iconify/icons-ic/twotone-search';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { ajustadoresData } from '../../../../static-data/ajustadores';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { AjustadoresCreateComponent } from '../components/ajustadores-create/ajustadores-create.component';
import { Ajustador } from '../interfaces/ajustador.interface';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-ajustadores-table',
  templateUrl: './ajustadores-table.component.html',
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class AjustadoresTableComponent implements OnInit {

  searchCtrl = new FormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;

  tableData = ajustadoresData;
  tableColumns: TableColumn<Ajustador>[] = [
    {
      label: '',
      property: 'selected',
      type: 'checkbox',
      cssClasses: ['w-6']
    },
    {
      label: 'Nombres',
      property: 'nombres',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Codigo SBS',
      property: 'codigoSbs',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Fecha de Registro',
      property: 'fechaRegistro',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: '',
      property: 'menu',
      type: 'button',
      cssClasses: ['text-secondary', 'w-10']
    },
  ];

  icSearch = icSearch;
  icFolder = icFolder;
  icMenu = icMenu;

  constructor(private dialog: MatDialog, private router: Router,) { }

  ngOnInit() {
  }

  openAjustador(id?: Ajustador['id']) {
    if(id){
      this.router.navigate(['/ajustadores/show']);
    } else {
      this.dialog.open(AjustadoresCreateComponent, {
        data: id || null,
        width: '600px'
      });
    }
  }

  toggleStar(id: Ajustador['id']) {
    const ajustador = this.tableData.find(c => c.id === id);
  }

  setData(data: Ajustador[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }
}
