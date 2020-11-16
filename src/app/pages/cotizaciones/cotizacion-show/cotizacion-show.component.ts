import { Component, OnInit } from '@angular/core';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
import icMap from '@iconify/icons-ic/twotone-map';
import icSearch from '@iconify/icons-ic/twotone-search';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';

import { Cotizacion } from './../interfaces/cotizacion.interface';
import { cotizacionesData } from '../../../../static-data/cotizaciones';

import { ActivatedRoute } from '@angular/router';

import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
// import { Cliente } from '../../clientes/interfaces/cliente.interface';
// import {clientesData} from '../../../../static-data/clientes';

@Component({
    selector: 'vex-cotizacion-show',
    templateUrl: './cotizacion-show.component.html',
    styleUrls: ['./cotizacion-show.component.scss'],
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
    ]
})
export class CotizacionShowComponent implements OnInit {

    icMoreVert = icMoreVert;
    icDeleteForever = icDeleteForever;
    icEdit = icEdit;
    icPhone = icPhone;
    icMail = icMail;
    icArrowBackIos = icArrowBackIos;
    icMap = icMap;
    icSearch = icSearch;
    icCloudDownload = icCloudDownload;
    icArrowDropDown = icArrowDropDown;
    icClose = icClose;
    icCloudUpload = icCloudUpload;


    navLinks = Array();
    cotizacion: Cotizacion;

    currentId = Number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {

        this.currentId = this.route.snapshot.params.id;
        var routerPrefix = '/cotizaciones/' + this.currentId;

        if (this.currentId) {
            this.cotizacion = cotizacionesData.find(c => c.id === Number(this.currentId));
        }


        // console.log(this.route.snapshot.params);

        this.navLinks = [
            {
                'label': 'Información del Ramo',
                'path': routerPrefix + '/informacion-ramo',
                'active': true
            },
            {
                'label': 'Cotizaciones',
                'path': routerPrefix + '/cotizaciones',
                'active': false
            },
            {
                'label': 'Cliente',
                'path': routerPrefix + '/cliente',
                'active': true
            },
            {
                'label': 'Evidencias',
                'path':  routerPrefix + '/evidencias',
                'active' : true
            },
            {
                'label': 'Aseguradoras',
                'path':  routerPrefix + '/aseguradoras',
                'active' : true
            }
        ];
    }

    getStateBadged(): String {
        return this.cotizacion.badges[0].text;
    }

}
