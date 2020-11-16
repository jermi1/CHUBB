import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';
import icMap from '@iconify/icons-ic/twotone-map';
import icSearch from '@iconify/icons-ic/twotone-search';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';

import { clientesData } from '../../../../static-data/clientes';
import { Cliente } from '../../clientes/interfaces/cliente.interface';

@Component({
  selector: 'vex-referenciador-edit',
  templateUrl: './referenciador-edit.component.html',
  styleUrls: ['./referenciador-edit.component.scss']
})


export class ReferenciadorEditComponent implements OnInit {


  cliente: Cliente;
  currentId = Number;
  icArrowBackIos = icArrowBackIos;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.params.id ? this.route.snapshot.params.id : 1;

    if (this.currentId) {
      this.cliente = clientesData.find(c => c.id === Number(this.currentId));
    }

  }

}






