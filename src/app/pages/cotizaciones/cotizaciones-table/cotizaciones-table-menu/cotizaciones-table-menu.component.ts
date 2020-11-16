import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { Icon } from '@visurel/iconify-angular';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import icTimelapse from '@iconify/icons-ic/twotone-timelapse';
import icStar from '@iconify/icons-ic/twotone-star';
import icLabel from '@iconify/icons-ic/twotone-label';
import icNoteAdd from '@iconify/icons-ic/twotone-note-add';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { Cotizacion } from '../../../cotizaciones/interfaces/cotizacion.interface';
import { cotizacionesData } from '../../../../../static-data/cotizaciones';

export interface CotizacionesTableMenu {
  type: 'link' | 'subheading';
  id?: 'all' | 'borrador' | 'pendienteResCliente' | 'pendienteResAseg' | 'rechazada';
  icon?: Icon;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-cotizaciones-table-menu',
  templateUrl: './cotizaciones-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class CotizacionesTableMenuComponent implements OnInit {

  @Input() items: CotizacionesTableMenu[] = [
    {
      type: 'link',
      id: 'all',
      icon: icViewHeadline,
      label: 'Todas'
    },
    {
      type: 'link',
      id: 'borrador',
      icon: icLabel,
      label: 'Borrador',
      classes: {
        icon: 'text-gray-400'
      }
    },
    {
      type: 'link',
      id: 'pendienteResCliente',
      icon: icLabel,
      label: 'Pendiente Resp. Cliente',
      classes: {
        icon: 'text-cyan-500'
      }
    },
    {
      type: 'link',
      id: 'pendienteResAseg',
      icon: icLabel,
      label: 'Pendientes Resp. Asegu.',
      classes: {
        icon: 'text-orange-500'
      }
    },
    {
      type: 'link',
      id: 'rechazada',
      icon: icLabel,
      label: 'Rechazas',
      classes: {
        icon: 'text-red-500'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<Cotizacion[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: CotizacionesTableMenu['id'] = 'all';
  icAddCircle = icAddCircle;

  constructor() { }

  ngOnInit() {
  }

  setFilter(category: CotizacionesTableMenu['id']) {

    this.activeCategory = category;

    if (category === 'all') {
      return this.filterChange.emit(cotizacionesData);
    }

    if (category === 'borrador'){
      return this.filterChange.emit(cotizacionesData.filter(c => c.badges[0].text === 'Borrador'));
    }
    
    if (category === 'pendienteResCliente'){
      return this.filterChange.emit(cotizacionesData.filter(c => c.badges[0].text === 'En Cliente'));
    }
    
    if (category === 'pendienteResAseg'){
      return this.filterChange.emit(cotizacionesData.filter(c => c.badges[0].text === 'En Aseguradora'));
    }
    
    if (category === 'rechazada'){
      return this.filterChange.emit(cotizacionesData.filter(c => c.badges[0].text === 'Rechazada'));
    }

    // if (category === 'pendienteResCliente'){
    //   return this.filterChange.emit(cotizacionesData.filter(c => c.badges[1]));
    // }
    // if (category === 'pendienteResAseg'){
    //   return this.filterChange.emit(cotizacionesData.filter(c => c.badges[1]));
    // }
  }

  isActive(category: CotizacionesTableMenu['id']) {
    return this.activeCategory === category;
  }
}
