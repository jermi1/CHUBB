import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icLabel from '@iconify/icons-ic/twotone-label';
import { ClienteTableMenu } from '../../../pages/clientes/interfaces/cliente-table.interface';


@Component({
  selector: 'vex-agregar-etiqueta',
  templateUrl: './agregar-etiqueta.component.html',
  styleUrls: ['./agregar-etiqueta.component.scss']
})
export class AgregarEtiquetaComponent implements OnInit {

  @Input() items: ClienteTableMenu[] = [
    {
      type: 'link',
      id: 'pep',
      icon: icLabel,
      label: 'PEP',
      classes: {
        icon: 'text-gray-500'
      }
    },
    {
      type: 'link',
      id: 'laft',
      icon: icLabel,
      label: 'LAFT',
      classes: {
        icon: 'text-gray-500'
      }
    },
    {
      type: 'link',
      id: 'infocorp',
      icon: icLabel,
      label: 'Infocorp',
      classes: {
        icon: 'text-gray-500'
      }
    },
    {
      type: 'link',
      id: 'estado',
      icon: icLabel,
      label: 'Empresa del Estado',
      classes: {
        icon: 'text-gray-500'
      }
    }
  ];

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<AgregarEtiquetaComponent>) { }

  ngOnInit() {
  }

  apply() {
    this.dialogRef.close();
  }

}
