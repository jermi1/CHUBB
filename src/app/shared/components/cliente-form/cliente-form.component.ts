import { Component, Input, OnInit } from '@angular/core';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { Cliente } from '../../../pages/clientes/interfaces/cliente.interface';


import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';;
import icCloudUpload from '@iconify/icons-ic/twotone-cloud-upload';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import { __importDefault } from 'tslib';

@Component({
  selector: 'vex-cliente-form',
  templateUrl: './cliente-form.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})

export class ClienteFormComponent implements OnInit {
  icMoreVert = icMoreVert;
  icEdit = icEdit;
  icCloudUpload = icCloudUpload;
  icCloudDownload = icCloudDownload;
  icArrowDropDown = icArrowDropDown;
  icDeleteForever = icDeleteForever;

  current = 'informacion-general';


  @Input() cliente: Cliente;
  @Input() columnView = false;
  @Input() isReferenciador = false;
  @Input() isPersonaJuridica = false;

  constructor() { }

  ngOnInit() {
    // console.log(this.cliente.tipo.id);
    if(this.cliente.tipo.id == 2) {
        this.isPersonaJuridica = true;
    }
  }

  changeTab(tab) {
    this.current = tab;
  }

}
