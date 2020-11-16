import { Component, OnInit } from '@angular/core';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';

@Component({
  selector: 'vex-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

    icArrowDropDown = icArrowDropDown;
  constructor() { }

  ngOnInit() {
  }

}
