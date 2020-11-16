import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { scaleIn400ms } from '../../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';

import { TableColumn } from '../../../../../../@vex/interfaces/table-column.interface';
import { comisionesData } from '../../../../../../static-data/comisiones';

import { Comision } from '../../../../comisiones/interfaces/comision.interface';
import icSearch from '@iconify/icons-ic/twotone-search';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

import coins from '@iconify/icons-fa-solid/coins';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icAddCircle from '@iconify/icons-ic/twotone-add-circle';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'vex-comisiones-cierres-detalle',
  templateUrl: './comisiones-cierres-detalle.component.html',
  styleUrls: ['./comisiones-cierres-detalle.component.scss']
})
export class ComisionesCierresDetalleComponent implements OnInit {

  navLinks = Array();
  currentId = Number;
  comision: Comision;

  icSearch = icSearch;
  coins = coins;
  icFilterList = icFilterList;
  icCloudDownload = icCloudDownload;
  icAddCircle = icAddCircle;
  icArrowBackIos = icArrowBackIos;

  aseguradoraSeleccionada = 'PE';

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
    // {
    //   label: 'C. REF.',
    //   property: 'cReferenciador',
    //   type: 'text',
    //   cssClasses: ['text-secondary']
    // },
    {
        label: 'Estado',
        property: 'badges',
        type: 'state',
        cssClasses: ['text-secondary']
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
