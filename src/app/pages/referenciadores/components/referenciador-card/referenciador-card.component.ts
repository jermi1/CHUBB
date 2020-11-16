import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Referenciador } from '../../interfaces/referenciador.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';

@Component({
  selector: 'vex-referenciador-card',
  templateUrl: './referenciador-card.component.html',
  styleUrls: ['./referenciador-card.component.scss']
})
export class ReferenciadorCardComponent implements OnInit {

  @Input() referenciador: Referenciador;
  @Output() openReferenciador = new EventEmitter<Referenciador['id']>();
  @Output() toggleStar = new EventEmitter<Referenciador['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, referenciadorId: Referenciador['id']) {
    event.stopPropagation();
    this.toggleStar.emit(referenciadorId);
  }
}
