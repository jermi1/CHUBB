import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'vex-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.scss']
})
export class EditarFacturaComponent implements OnInit {


  icClose = icClose;

  constructor() { }

  ngOnInit() {
  }

}
