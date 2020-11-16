import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { cotizacionesData } from '../../../../../static-data/cotizaciones';
import { Cotizacion } from '../../interfaces/cotizacion.interface';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';

import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';

import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';

import { CotizacionAseguradora } from '../../../../interfaces/cotizacion-aseguradora.interface';
import { cotizacionesPositiva, cotizacionesPacifico, cotizacionesProtecta } from '../../../../../static-data/cotizaciones-aseguradoras';

import { MatDialog } from '@angular/material/dialog'
import { FilePickerComponent } from '../../../../shared/components/file-picker/file-picker.component';


@Component({
    selector: 'vex-cotizacion-show-list',
    templateUrl: './cotizacion-show-list.component.html',
    styleUrls: ['./cotizacion-show-list.component.scss'],
    animations: [
        stagger20ms,
        fadeInUp400ms,
        scaleFadeIn400ms
    ]
})

export class CotizacionShowListComponent implements OnInit {

    icCloudUpload = icCloudUpload;
    
    cotizacion: Cotizacion;
    currentId = Number;

    cotizacionesPositiva = cotizacionesPositiva;
    cotizacionesPacifico = cotizacionesPacifico;
    cotizacionesProtecta = cotizacionesProtecta;
    tableColumns: TableColumn<CotizacionAseguradora>[] = [
        {
            label: 'CODIGO',
            property: 'codigo',
            type: 'text',
            cssClasses: ['font-medium']
        },
        {
            label: 'V. ASEGURADORA',
            property: 'version',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'V. SOLICITUD',
            property: 'versionSolicitud',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'FECHA',
            property: 'fecha',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'PRIMA',
            property: 'prima',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'MONTO ASEGURADO',
            property: 'montoAsegurado',
            type: 'text',
            cssClasses: ['text-secondary']
        },
        {
            label: 'ESTADO',
            property: 'badges',
            type: 'state',
            cssClasses: ['text-secondary']
        },
        {
            label: '',
            property: 'menu',
            type: 'button',
            cssClasses: ['text-secondary', 'w-10']
        },
    ];

    constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

    ngOnInit() {
        this.currentId = this.route.parent.snapshot.params.id ? this.route.parent.snapshot.params.id : 1;
        if (this.currentId) {
            this.cotizacion = cotizacionesData.find(c => c.id === Number(this.currentId));
        }
    }

    rowClick (id: Number) {
        console.log(id);
    }

    pickFile () {
        this.dialog.open(FilePickerComponent, {
            width: '650px'
      });
    }

}
