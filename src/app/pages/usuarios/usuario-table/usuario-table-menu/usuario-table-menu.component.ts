import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { usuariosData } from '../../../../../static-data/usuario';
import { Usuario } from '../../interfaces/usuario.interface';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import icStar from '@iconify/icons-ic/twotone-star';
import icLabel from '@iconify/icons-ic/twotone-label';
import icGroup from '@iconify/icons-ic/twotone-group';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';
import icAsterisk from '@iconify/icons-fa-solid/asterisk';

import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';

import { AgregarEtiquetaComponent } from '../../../../shared/components/agregar-etiqueta/agregar-etiqueta.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioTableMenu } from '../../interfaces/usuario-table.interface';

@Component({
  selector: 'vex-usuario-table-menu',
  templateUrl: './usuario-table-menu.component.html',
  styleUrls: ['./usuario-table-menu.component.scss'],
  animations: [fadeInRight400ms, stagger40ms, scaleIn400ms]
})
export class UsuarioTableMenuComponent implements OnInit {

  @Input() items: UsuarioTableMenu[] = [
    {
      type: 'link',
      id: 'all',
      icon: icViewHeadline,
      label: 'Todos'
    },
    /*
    {
      type: 'link',
      id: 'vip',
      icon: icStar,
      label: 'VIP',
      classes: {
        icon: 'text-amber-500'
      }
    },
    */
    {
      type: 'link',
      id: 'cliente',
      icon: icGroup,
      label: 'Activos'
    },
    {
      type: 'link',
      id: 'pre-cliente',
      icon: icGroup,
      label: 'Anulados',
      classes: {
        icon: 'text-red-500'
      },
      size: '25px'
    },
/*
    {
      type: 'subheading',
      label: 'Etiquetas'
    },
    {
      type: 'link',
      id: 'infocorp',
      icon: icLabel,
      label: 'Riesgo Financiero',
      classes: {
        icon: 'text-gray-500'
      }
    },
    {
      type: 'link',
      id: 'estado',
      icon: icLabel,
      label: 'Empresa del Estado',
      classes: {
        icon: 'text-gray-500'
      }
    },
     */

  ];

  @Output() filterChange = new EventEmitter<Usuario[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: UsuarioTableMenu['id'] = 'all';
  icAddCircle = icAddCircle;

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //       'thumbs-up',
  //       sanitizer.bypassSecurityTrustResourceUrl('assets/img/custom_icons/ic-datos-de-cliente.svg'));
  // }
  constructor( private dialog: MatDialog, private router: Router ) {
  }

  ngOnInit() {
  }


  setFilter(category: UsuarioTableMenu['id']) {

    this.activeCategory = category;


    if (category === 'all') {
      return this.filterChange.emit(usuariosData);
    }
    }

    isActive(category: UsuarioTableMenu['id']) {
      return this.activeCategory === category;
    }

    openTableFilter() {
      this.dialog.open(AgregarEtiquetaComponent, {
        width: '450px'
      });
    }

  }


