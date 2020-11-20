import { Component, OnInit } from '@angular/core';

import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

import { ActivatedRoute } from '@angular/router';
import { siniestrosData } from '../../../../static-data/siniestros';
import { Siniestro } from '../interfaces/siniestro.interface';

@Component({
  selector: 'vex-siniestro-show',
  templateUrl: './siniestro-show.component.html',
  styleUrls: ['./siniestro-show.component.scss']
})
export class SiniestroShowComponent implements OnInit {

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icArrowBackIos = icArrowBackIos;



  navLinks = Array();
  siniestro: Siniestro

  currentId = 1;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.params.id;
    var routerPrefix = '/siniestros/' + this.currentId;

    this.siniestro = siniestrosData.find(s => s.id === Number(this.currentId));

    this.navLinks = [
      {
        'label': 'Siniestro',
        'path': routerPrefix + '/detalles-siniestro'
      },
      {
        'label': 'SCTR',
        'path': routerPrefix + '/sctr'
      },
      {
        'label': 'Carta de Garantía - Siniestro',
        'path': routerPrefix + '/siniestro-cg'
      },
      {
        'label': 'Condición Medica',
        'path': routerPrefix + '/condicion-medica'
      },
      {
        'label': 'Póliza',
        'path': routerPrefix + '/poliza'
      },
      {
        'label': 'Cliente',
        'path': routerPrefix + '/cliente'
      },
      {
        'label': 'Cargar Siniestros',
        'path': routerPrefix + '/carga'
      }
    ];
  }
}
