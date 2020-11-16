import { Component, OnInit, Input } from '@angular/core';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';

@Component({
    selector: 'vex-aseguradora-thumb',
    templateUrl: './aseguradora-thumb.component.html',
    styleUrls: ['./aseguradora-thumb.component.scss']
})
export class AseguradoraThumbComponent implements OnInit {

    icArrowDropDown = icArrowDropDown;
    
    @Input() image: string;
    @Input() name: string;
    @Input() email: string;
    @Input() selected: boolean;

    constructor() { }

    ngOnInit() {
    }

}
