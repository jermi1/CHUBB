import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { referenciadoresData } from '../../../../../static-data/referenciadores';
import { Icon } from '@visurel/iconify-angular';
import { Referenciador } from '../../interfaces/referenciador.interface';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import icHistory from '@iconify/icons-ic/twotone-history';
import icStar from '@iconify/icons-ic/twotone-star';
import icLabel from '@iconify/icons-ic/twotone-label';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';

export interface ReferenciadorTableMenu {
  type: 'link' | 'subheading';
  id?: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: Icon;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-referenciador-table-menu',
  templateUrl: './referenciador-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class ReferenciadorTableMenuComponent implements OnInit {

  @Input() items: ReferenciadorTableMenu[] = [
    {
      type: 'link',
      id: 'all',
      icon: icViewHeadline,
      label: 'Todos'
    },
    {
      type: 'link',
      id: 'frequently',
      icon: icHistory,
      label: 'Frecuentes'
    },
    {
      type: 'link',
      id: 'starred',
      icon: icStar,
      label: 'VIP'
    },
    {
      type: 'subheading',
      label: 'Etiquetas'
    },
    {
      type: 'link',
      id: 'family',
      icon: icLabel,
      label: 'PEP',
      classes: {
        icon: 'text-blue-500'
      }
    },
    {
      type: 'link',
      id: 'friends',
      icon: icLabel,
      label: 'LAFT',
      classes: {
        icon: 'text-green-500'
      }
    },
    {
      type: 'link',
      id: 'colleagues',
      icon: icLabel,
      label: 'Infocor',
      classes: {
        icon: 'text-amber-500'
      }
    },
    {
      type: 'link',
      id: 'business',
      icon: icLabel,
      label: 'Estado',
      classes: {
        icon: 'text-gray-500'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<Referenciador[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: ReferenciadorTableMenu['id'] = 'all';
  icAddCircle = icAddCircle;

  constructor() { }

  ngOnInit() {
  }

  setFilter(category: ReferenciadorTableMenu['id']) {
    this.activeCategory = category;

    if (category === 'starred') {
      return this.filterChange.emit(referenciadoresData.filter(c => c.starred));
    }

    if (category === 'all') {
      return this.filterChange.emit(referenciadoresData);
    }

    if (category === 'frequently'
      || category === 'family'
      || category === 'friends'
      || category === 'colleagues'
      || category === 'business') {
      return this.filterChange.emit([]);
    }
  }

  isActive(category: ReferenciadorTableMenu['id']) {
    return this.activeCategory === category;
  }
}
