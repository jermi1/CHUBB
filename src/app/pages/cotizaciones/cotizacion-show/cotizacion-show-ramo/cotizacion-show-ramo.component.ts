import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';

import { cotizacionesData } from '../../../../../static-data/cotizaciones';
import { Cotizacion } from '../../interfaces/cotizacion.interface';

@Component({
    selector: 'vex-cotizacion-show-ramo',
    templateUrl: './cotizacion-show-ramo.component.html',
    styleUrls: ['./cotizacion-show-ramo.component.scss']
})

export class CotizacionShowRamoComponent implements OnInit {

    icCloudUpload = icCloudUpload;

    cotizacion: Cotizacion;
    currentId = Number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.currentId = this.route.parent.snapshot.params.id ? this.route.parent.snapshot.params.id : 1;
        if (this.currentId) {
            this.cotizacion = cotizacionesData.find(c => c.id === Number(this.currentId));
        }
    }

}
