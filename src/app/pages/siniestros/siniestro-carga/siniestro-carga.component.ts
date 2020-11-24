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
  selector: 'vex-siniestro-carga',
  templateUrl: './siniestro-carga.component.html',
  styleUrls: ['./siniestro-carga.component.scss']
})
export class SiniestroCargaComponent implements OnInit {
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
        'label': 'Cargar Siniestros',
        'path': routerPrefix + '/carga'
      }
    ];
  }
}
