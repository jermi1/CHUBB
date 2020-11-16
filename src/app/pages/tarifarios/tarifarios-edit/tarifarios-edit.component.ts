import { Component, OnInit } from '@angular/core';

import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';

import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';


@Component({
  selector: 'vex-tarifarios-edit',
  templateUrl: './tarifarios-edit.component.html',
  styleUrls: ['./tarifarios-edit.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
]
})
export class TarifariosEditComponent implements OnInit {


    icArrowBackIos = icArrowBackIos;


  constructor() { }

  ngOnInit() {
  }

}
