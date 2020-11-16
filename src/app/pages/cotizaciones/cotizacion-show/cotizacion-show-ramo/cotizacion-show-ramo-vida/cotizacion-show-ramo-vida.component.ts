import { Component, OnInit } from '@angular/core';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';

@Component({
    selector: 'vex-cotizacion-show-ramo-vida',
    templateUrl: './cotizacion-show-ramo-vida.component.html',
    styleUrls: ['./cotizacion-show-ramo-vida.component.scss']
})

export class CotizacionShowRamoVidaComponent implements OnInit {

    icCloudUpload = icCloudUpload;

    constructor() { }

    ngOnInit() {
        
    }

}
