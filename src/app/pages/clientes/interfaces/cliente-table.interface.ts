import { Icon } from '@visurel/iconify-angular';

export interface ClienteTableMenu {
    type: 'link' | 'subheading'| 'button';
    id?: 'vip' | 'all' | 'pep' | 'laft' | 'infocorp' | 'estado' | 'cliente' | 'pre-cliente'| 'add';
    icon?: Icon;
    label: string;
    classes?: {
      icon?: string;
    };
    size?: string;
  }