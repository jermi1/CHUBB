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

@Component({
    selector: 'vex-cotizacion-show-aseguradoras',
    templateUrl: './cotizacion-show-aseguradoras.component.html',
    styleUrls: ['./cotizacion-show-aseguradoras.component.scss']
})
export class CotizacionShowAseguradorasComponent implements OnInit {


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

    aseguradoras = [
        {
            image: '/assets/img/aseguradoras/la-positiva.png',
            name: 'Luis Alberto Ruiz',
            email: 'lruiz@lapositiva.pe',
            selected: false,
        },
        {
            image: '/assets/img/aseguradoras/pacifico.png',
            name: 'Jennifer Suarez',
            email: 'jsuarez@pacifico.com.pe',
            selected: false,
        },
        {
            image: '/assets/img/aseguradoras/protecta.png',
            name: 'Bruna Salvatierra',
            email: 'bsalvatierra@protecta.com.pe',
            selected: false,
        },
        {
            image: '/assets/img/aseguradoras/sura.png',
            name: 'Andres Alvarado',
            email: 'aalvarado@sura.com',
            selected: false,
        },
    ]

    constructor() { }

    ngOnInit() {
    }

    toggleSelected(item) {
        // console.log(item);
        item.selected = item.selected ? false : true;
    }

}
