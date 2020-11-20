import { Component, OnInit } from '@angular/core';
import icPeople from '@iconify/icons-ic/twotone-people';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { usuariosData } from '../../../../static-data/usuario';
import { Usuario } from '../interfaces/usuario.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



import { TableFilterComponent } from '../../../shared/components/table-filter/table-filter.component';

// import { Usuario } from '../../../models/usuario.model';
// import { UsuarioService } from '../../../services/usuario.service';
@Component({
  selector: 'vex-usuario-table',
  templateUrl: './usuario-table.component.html',
  styleUrls: ['./usuario-table.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
]
})
export class UsuarioTableComponent implements OnInit {

  searchCtrl = new FormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
      debounceTime(10)
  );

  menuOpen = false;

  activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
  tableData = usuariosData;
  tableColumns: TableColumn<Usuario>[] = [
      // {
      //     label: '',
      //     property: 'seleccionado',
      //     type: 'checkbox',
      //     cssClasses: ['w-6']
      // },
      {
          label: 'NOMBRE USUARIO',
          property: 'nombre',
          type: 'text',
          cssClasses: ['font-medium', 'w-24']
      },
      {
          label: 'TIPO DOCUMENTO',
          property: 'tipoDocumento',
          type: 'text',
          cssClasses: ['w-20']
      },
      {
          label: 'Nº DOCUMENTO',
          property: 'nroDocumento',
          type: 'text',
          cssClasses: ['w-20']
      },
      {
        label: 'USUARIO',
        property: 'usuario',
        type: 'text',
        cssClasses: ['w-20']
    },
      {
          label: 'EMAIL',
          property: 'email',
          type: 'text',
          cssClasses: ['text-secondary', 'w-10']
      },
      {
          label: 'CELULAR',
          property: 'celular',
          type: 'text',
          cssClasses: ['text-secondary', 'w-10']
      },
      {
        label: 'FECHA CREACIÓN',
        property: 'fechaCreacion',
        type: 'text',
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
  icPeople = icPeople;
  icMenu = icMenu;
  icFilterList = icFilterList;
  icCloudDownload = icCloudDownload;

  // constructor(private dialog: MatDialog, private router: Router, private usuarioservice: UsuarioService) { }
  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {


  }

  rowClick(id?: Usuario['id']) {
      this.router.navigate(['/usuarios/' + id]);
  }

  setData(data: Usuario[]) {
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