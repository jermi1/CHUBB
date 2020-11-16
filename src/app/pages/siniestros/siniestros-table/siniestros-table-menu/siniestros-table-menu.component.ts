import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { siniestrosData } from '../../../../../static-data/siniestros';
import { Icon } from '@visurel/iconify-angular';
import { Siniestro } from '../../interfaces/siniestro.interface';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
// import icTimelapse from '@iconify/icons-ic/twotone-timelapse';
// import icStar from '@iconify/icons-ic/twotone-star';
import icLabel from '@iconify/icons-ic/twotone-label';
import icCreateNewFolder from '@iconify/icons-ic/twotone-create-new-folder';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';

export interface SiniestrosTableMenu {
  type: 'link' | 'subheading';
  id?: 'starred' | 'all' | 'activos' | 'cerrados';
  icon?: Icon;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-siniestros-table-menu',
  templateUrl: './siniestros-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class SiniestrosTableMenuComponent implements OnInit {

  @Input() items: SiniestrosTableMenu[] = [
    {
      type: 'link',
      id: 'all',
      icon: icViewHeadline,
      label: 'Todas'
    },
    {
      type: 'link',
      id: 'activos',
      icon: icLabel,
      label: 'Activos',
      classes: {
        icon: 'text-green-500'
      }
    },
    {
      type: 'link',
      id: 'cerrados',
      icon: icLabel,
      label: 'Cerrados',
      classes: {
        icon: 'text-gray-500'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<Siniestro[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: SiniestrosTableMenu['id'] = 'all';
  icAddCircle = icAddCircle;

  constructor() { }

  ngOnInit() {
  }

  setFilter(category: SiniestrosTableMenu['id']) {
    this.activeCategory = category;

    if (category === 'starred') {
      // return this.filterChange.emit(siniestrosData.filter(c => c.estado));
    }

    if (category === 'activos') {
        return this.filterChange.emit(siniestrosData.filter(c => c.badges[0].text==="Activo"));
    }
    
    if (category === 'cerrados') {
        return this.filterChange.emit(siniestrosData.filter(c => c.badges[0].text==="Cerrado"));
    }


    if (category === 'all') {
      return this.filterChange.emit(siniestrosData);
    }

    // if (category === 'frequently'
    //   || category === 'family'
    //   || category === 'friends'
    //   || category === 'colleagues'
    //   || category === 'business') {
    //   return this.filterChange.emit([]);
    // }
  }

  isActive(category: SiniestrosTableMenu['id']) {
    return this.activeCategory === category;
  }
}
