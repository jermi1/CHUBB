import { Component, OnInit } from '@angular/core';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';

@Component({
    selector: 'vex-cotizacion-show-ramo-otros',
    templateUrl: './cotizacion-show-ramo-otros.component.html',
    styleUrls: ['./cotizacion-show-ramo-otros.component.scss']
})

export class CotizacionShowRamoOtrosComponent implements OnInit {

    icCloudUpload = icCloudUpload;

    constructor() { }

    ngOnInit() {
        
    }

}
