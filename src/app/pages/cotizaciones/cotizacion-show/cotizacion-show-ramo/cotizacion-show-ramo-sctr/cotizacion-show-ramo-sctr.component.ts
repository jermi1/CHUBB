import { Component, OnInit } from '@angular/core';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';

@Component({
    selector: 'vex-cotizacion-show-ramo-sctr',
    templateUrl: './cotizacion-show-ramo-sctr.component.html',
    styleUrls: ['./cotizacion-show-ramo-sctr.component.scss']
})

export class CotizacionShowRamoSctrComponent implements OnInit {

    icCloudUpload = icCloudUpload;

    constructor() { }

    ngOnInit() {
        
    }

}
