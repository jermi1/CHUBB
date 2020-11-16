import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';

import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { comisionesData } from '../../../../../static-data/comisiones';
import { Comision } from '../../interfaces/comision.interface';
import icSearch from '@iconify/icons-ic/twotone-search';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

import { ComisionesCreateComponent } from '../../components/comisiones-create/comisiones-create.component';
import { EditarFacturaComponent } from '../../components/editar-factura/editar-factura.component';

import coins from '@iconify/icons-fa-solid/coins';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';

// import { cierresData } from '../../../../static-data/cierres';
import { Cierre } from '../../interfaces/cierre.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'vex-comisiones-cierres-show',
    templateUrl: './comisiones-cierres-show.component.html',
    styleUrls: ['./comisiones-cierres-show.component.scss'],
    animations: [
        stagger40ms,
        scaleIn400ms,
        fadeInRight400ms
      ]
  })
export class ComisionesCierresShowComponent implements OnInit {

    navLinks = Array();
    currentId = Number;
    comision: Comision;

    icSearch = icSearch;
    coins = coins;
    icFilterList = icFilterList;
    icCloudDownload = icCloudDownload;
    icAddCircle = icAddCircle;
    icArrowBackIos = icArrowBackIos;


  tableData = comisionesData;
  tableColumns: TableColumn<Comision>[] = [
    {
      label: 'RAMO',
      property: 'ramo',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'Nº PÓLIZA',
      property: 'poliza',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    // {
    //   label: 'Nº SUB CIERRE',
    //   property: 'subcierre',
    //   type: 'text',
    //   cssClasses: ['text-secondary']
    // },
    {
      label: 'REF.',
      property: 'referenciador',
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
      label: 'MONEDA',
      property: 'moneda',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'C. BROCKER',
      property: 'cBrocker',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'C. REF.',
      property: 'cReferenciador',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    // {
    //     label: 'Estado',
    //     property: 'badges',
    //     type: 'state',
    //     cssClasses: ['text-secondary']
    // }
  ];

  
    constructor(
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {

        this.currentId = this.route.snapshot.params.id;
        var routePrefix = '/comisiones/cierres/' + this.currentId;

        if (this.currentId) {
        this.comision = comisionesData.find(c => c.id === Number(this.currentId));
        }

        this.navLinks = [
        {
            'label': 'Detalles del cierre',
            'path': routePrefix + '/detalles'
        },

        // Por quitar de los componentes
        // {
        //     'label': 'Sub Cierres',
        //     'path': routePrefix + '/subcierres'
        // },
        ];

    }

    openComision(id?: Cierre['id']) {
        if (id) {
          this.router.navigate(['/comisiones/show']);
        } else {
          this.dialog.open(ComisionesCreateComponent, {
            data: id || null,
            width: '450px'
          });
        }
      }

    edit() {
      this.dialog.open(EditarFacturaComponent , {
        width: '450px'
      });
    }
}
