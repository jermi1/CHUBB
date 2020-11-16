import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ajustador } from '../../interfaces/ajustador.interface';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';

import icCreateNewFolder from '@iconify/icons-ic/twotone-create-new-folder';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';

@Component({
  selector: 'vex-ajustadores-table-menu',
  templateUrl: './ajustadores-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class AjustadoresTableMenuComponent implements OnInit {


  @Output() filterChange = new EventEmitter<Ajustador[]>();
  @Output() openAddNew = new EventEmitter<void>();

  icCreateNewFolder = icCreateNewFolder;

  constructor() { }

  ngOnInit() {
  }
}
