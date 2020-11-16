import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { cobranzasData } from '../../../../../static-data/cobranzas';
import { Icon } from '@visurel/iconify-angular';
import { Cobranza } from '../../interfaces/cobranza.interface';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import icLabel from '@iconify/icons-ic/twotone-label';
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';

import icCreateNewFolder from '@iconify/icons-ic/twotone-create-new-folder';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog'
import { FilePickerComponent } from '../../../../shared/components/file-picker/file-picker.component';


export interface CobranzasTableMenu {
    type: 'link' | 'subheading';
    id?: 'Pagado' | 'Pendiente' | 'Anulado' | 'all';
    icon?: Icon;
    label: string;
    classes?: {
        icon?: string;
    };
}

@Component({
    selector: 'vex-cobranzas-table-menu',
    templateUrl: './cobranzas-table-menu.component.html',
    animations: [fadeInRight400ms, stagger40ms]
})
export class CobranzasTableMenuComponent implements OnInit {

    @Input() items: CobranzasTableMenu[] = [
        {
            type: 'link',
            id: 'all',
            icon: icViewHeadline,
            label: 'Todas'
        },
        {
            type: 'link',
            id: 'Pagado',
            icon: icLabel,
            label: 'Pagado',
            classes: {
                icon: 'text-green-500'
            }
        },
        {
            type: 'link',
            id: 'Pendiente',
            icon: icLabel,
            label: 'Pendiente',
            classes: {
                icon: 'text-red-500'
            }
        },
        {
            type: 'link',
            id: 'Anulado',
            icon: icLabel,
            label: 'Anulado',
            classes: {
                icon: 'text-gray-500'
            }
        },
        // {
        //   type: 'link',
        //   id: 'starred',
        //   icon: icStar,
        //   label: 'Starred'
        // },
        // {
        //   type: 'subheading',
        //   label: 'Labels'
        // },
        // {
        //   type: 'link',
        //   id: 'family',
        //   icon: icLabel,
        //   label: 'Family',
        //   classes: {
        //     icon: 'text-primary-500'
        //   }
        // },
        // {
        //   type: 'link',
        //   id: 'friends',
        //   icon: icLabel,
        //   label: 'Friends',
        //   classes: {
        //     icon: 'text-green-500'
        //   }
        // },
        // {
        //   type: 'link',
        //   id: 'colleagues',
        //   icon: icLabel,
        //   label: 'Colleagues',
        //   classes: {
        //     icon: 'text-amber-500'
        //   }
        // },
        // {
        //   type: 'link',
        //   id: 'business',
        //   icon: icLabel,
        //   label: 'Business',
        //   classes: {
        //     icon: 'text-gray-500'
        //   }
        // },
    ];

    @Output() filterChange = new EventEmitter<Cobranza[]>();
    @Output() openAddNew = new EventEmitter<void>();

    activeCategory: CobranzasTableMenu['id'] = 'all';
    icCreateNewFolder = icCreateNewFolder;
    icCloudUpload = icCloudUpload;
    icLabel = icLabel;

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    setFilter(category: CobranzasTableMenu['id']) {
        this.activeCategory = category;

        // if (category === 'starred') {
        //   // return this.filterChange.emit(cobranzasData.filter(c => c.starred));
        // }

        if (category === 'Pagado') {
            return this.filterChange.emit(cobranzasData.filter(c => c.badges[0].text === 'Pagado'));
        }
        if (category === 'Pendiente') {
            return this.filterChange.emit(cobranzasData.filter(c => c.badges[0].text === 'Pendiente'));
        }
        if (category === 'Anulado') {
            return this.filterChange.emit(cobranzasData.filter(c => c.badges[0].text === 'Anulado'));
        }

        if (category === 'all') {
            return this.filterChange.emit(cobranzasData);
        }

        // if (category === 'family'
        //   || category === 'friends'
        //   || category === 'colleagues'
        //   || category === 'business') {
        //   return this.filterChange.emit([]);
        // }
    }

    isActive(category: CobranzasTableMenu['id']) {
        return this.activeCategory === category;
    }

    pickFile() {
        this.dialog.open(FilePickerComponent, {
            width: '650px'
        });
    }

}
