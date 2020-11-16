import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ajustador } from '../../interfaces/ajustador.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';

@Component({
  selector: 'vex-ajustadores-card',
  templateUrl: './ajustadores-card.component.html',
  styleUrls: ['./ajustadores-card.component.scss']
})
export class AjustadoresCardComponent implements OnInit {

  @Input() ajustador: Ajustador;
  @Output() openAjustador = new EventEmitter<Ajustador['id']>();
  @Output() toggleStar = new EventEmitter<Ajustador['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, polizaId: Ajustador['id']) {
    event.stopPropagation();
    this.toggleStar.emit(polizaId);
  }
}
