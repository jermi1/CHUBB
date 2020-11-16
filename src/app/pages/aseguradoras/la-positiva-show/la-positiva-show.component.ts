import { Component, OnInit } from '@angular/core';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

@Component({
  selector: 'vex-la-positiva-show',
  templateUrl: './la-positiva-show.component.html',
  styleUrls: ['./la-positiva-show.component.scss']
})
export class LaPositivaShowComponent implements OnInit {

  constructor() { }

  icArrowBackIos = icArrowBackIos;
  
  ngOnInit() {
  }

}
