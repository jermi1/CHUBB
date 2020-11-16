import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { polizasData } from '../../../../../static-data/polizas';
import { Icon } from '@visurel/iconify-angular';
import { Poliza } from '../../interfaces/poliza.interface';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import icCreateNewFolder from '@iconify/icons-ic/twotone-create-new-folder';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';
import icLabel from '@iconify/icons-ic/twotone-label';

export interface PolizasTableMenu {
    type: 'link' | 'subheading';
    id?: 'frequently' | 'starred' | 'all' | 'family' | 'vigente' | 'anulado' | 'suspendido';
    icon?: Icon;
    label: string;
    classes?: {
        icon?: string;
    };
}

@Component({
    selector: 'vex-polizas-table-menu',
    templateUrl: './polizas-table-menu.component.html',
    animations: [fadeInRight400ms, stagger40ms]
})
export class PolizasTableMenuComponent implements OnInit {

    @Input() items: PolizasTableMenu[] = [
        {
            type: 'link',
            id: 'all',
            icon: icViewHeadline,
            label: 'Todas'
        },
        {
            type: 'subheading',
            label: 'Estados'
        },
        {
            type: 'link',
            id: 'vigente',
            icon: icLabel,
            label: 'Vigente',
            classes: {
                icon: 'text-green-300'
            }
        },
        {
            type: 'link',
            id: 'anulado',
            icon: icLabel,
            label: 'Anulado',
            classes: {
                icon: 'text-red-500'
            }
        },
        {
            type: 'link',
            id: 'suspendido',
            icon: icLabel,
            label: 'Suspendido',
            classes: {
                icon: 'text-orange-500'
            }
        },
       
    ];

    @Output() filterChange = new EventEmitter<Poliza[]>();
    @Output() openAddNew = new EventEmitter<void>();

    activeCategory: PolizasTableMenu['id'] = 'all';
    icCreateNewFolder = icCreateNewFolder;
    icAddCircle = icAddCircle;

    constructor() { }

    ngOnInit() {
    }

    setFilter(category: PolizasTableMenu['id']) {
        this.activeCategory = category;

        if (category === 'vigente') {
            return this.filterChange.emit(polizasData.filter(c => c.badges[0].text==="Vigente"));
        }

        if (category === 'anulado') {
            return this.filterChange.emit(polizasData.filter(c => c.badges[0].text==="Anulado"));
        }

        if (category === 'suspendido') {
            return this.filterChange.emit(polizasData.filter(c => c.badges[0].text==="Suspendido"));
        }

        if (category === 'all') {
            return this.filterChange.emit(polizasData);
        }

    }

    isActive(category: PolizasTableMenu['id']) {
        return this.activeCategory === category;
    }
}
