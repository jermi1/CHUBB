import { Component, OnInit } from '@angular/core';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import { Icon } from '@visurel/iconify-angular';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icBook from '@iconify/icons-ic/twotone-book';
import { PopoverRef } from '../popover/popover-ref';

export interface MegaMenuFeature {
  icon: Icon;
  label: string;
  route: string;
}

export interface MegaMenuPage {
  label: string;
  route: string;
}

@Component({
  selector: 'vex-mega-menu',
  templateUrl: './mega-menu.component.html'
})
export class MegaMenuComponent implements OnInit {

  features: MegaMenuFeature[] = [
    {
      icon: icLayers,
      label: 'General',
      route: '/'
    },
    {
      icon: icAssigment,
      label: 'Pre Venta',
      route: '/'
    },
    {
      icon: icContactSupport,
      label: 'Post Venta',
      route: '/'
    },
    {
      icon: icContacts,
      label: 'Información',
      route: '/'
    },
    {
      icon: icAssessment,
      label: 'Alcance',
      route: '/'
    },
    {
      icon: icBook,
      label: 'Procesos',
      route: '/'
    }
  ];

  pages: MegaMenuPage[] = [
    {
      label: 'Dashboard',
      route: '/'
    },
    {
      label: 'Clientes',
      route: '/'
    },
    {
      label: 'Cotizaciones',
      route: '/'
    },
    {
      label: 'Pólizas',
      route: '/'
    },
    {
      label: 'Renovaciones',
      route: '/'
    },
    {
      label: 'Siniestros',
      route: '/'
    },
    {
      label: 'Cobranzas',
      route: '/'
    },
    {
      label: 'Comisiones',
      route: '/'
    },
    {
      label: 'Referenciadores',
      route: '/'
    },
    {
      label: 'Comisiones',
      route: '/'
    }
  ];

  constructor(private popoverRef: PopoverRef<MegaMenuComponent>) { }

  ngOnInit() {
  }

  close() {
    this.popoverRef.close();
  }
}
