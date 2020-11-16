import { Component, OnInit } from '@angular/core';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icAddCircleOutline from '@iconify/icons-ic/twotone-add-circle-outline';

@Component({
    selector: 'vex-cotizacion-show-ramo-autos',
    templateUrl: './cotizacion-show-ramo-autos.component.html',
    styleUrls: ['./cotizacion-show-ramo-autos.component.scss']
})

export class CotizacionShowRamoAutosComponent implements OnInit {

    icCloudUpload = icCloudUpload;
    icAddCircleOutline = icAddCircleOutline;

    vehiculos = [];

    constructor() { }

    ngOnInit() {
        this.vehiculos.push({
            placa: 'APQ-345',
            gps: false,
            inspecion: false
        });
        
    }

    agregarVehiculo() {
        this.vehiculos.push({
            placa: 'TRQ-3433',
            gps: false,
            inspeccion: false
        });
        console.log(this.vehiculos);
    }

    cambioInspeccion(event: any, item: any) {
        item.inspeccion = event.checked
    }

    cambioGPS(event: any, item: any) {
        item.gps = event.checked
    }

}
