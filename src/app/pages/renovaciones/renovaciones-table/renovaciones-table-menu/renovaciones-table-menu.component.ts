import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { renovacionesData } from '../../../../../static-data/renovaciones';
import { Icon } from '@visurel/iconify-angular';
import { Renovacion } from '../../interfaces/renovacion.interface';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import icCreateNewFolder from '@iconify/icons-ic/twotone-create-new-folder';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import icLabel from '@iconify/icons-ic/twotone-label';


export interface RenovacionesTableMenu {
  type: 'link' | 'subheading';
  id?: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: Icon;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-renovaciones-table-menu',
  templateUrl: './renovaciones-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class RenovacionesTableMenuComponent implements OnInit {

  @Input() items: RenovacionesTableMenu[] = [
    {
      type: 'link',
      id: 'all',
      icon: icViewHeadline,
      label: 'Todas'
    },
    {
      type: 'link',
      id: 'starred',
      icon: icLabel,
      label: 'Vencidas',
      classes: {
        icon: 'text-gray-500'
      }
    },
    {
      type: 'link',
      id: 'starred',
      icon: icLabel,
      label: 'Por vencer (30 días)',
      classes: {
        icon: 'text-red-500'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<Renovacion[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: RenovacionesTableMenu['id'] = 'all';
  icCreateNewFolder = icCreateNewFolder;

  constructor() { }

  ngOnInit() {
  }

  setFilter(category: RenovacionesTableMenu['id']) {
    this.activeCategory = category;

    if (category === 'starred') {
      return this.filterChange.emit(renovacionesData.filter(c => c.starred));
    }

    if (category === 'all') {
      return this.filterChange.emit(renovacionesData);
    }

    if (category === 'frequently'
      || category === 'family'
      || category === 'friends'
      || category === 'colleagues'
      || category === 'business') {
      return this.filterChange.emit([]);
    }
  }

  isActive(category: RenovacionesTableMenu['id']) {
    return this.activeCategory === category;
  }
}
