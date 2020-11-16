import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cobranza } from '../../interfaces/cobranza.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';

@Component({
  selector: 'vex-cobranzas-card',
  templateUrl: './cobranzas-card.component.html',
  styleUrls: ['./cobranzas-card.component.scss']
})
export class CobranzasCardComponent implements OnInit {

  @Input() cobranza: Cobranza;
  @Output() openCobranza = new EventEmitter<Cobranza['id']>();
  @Output() toggleStar = new EventEmitter<Cobranza['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, polizaId: Cobranza['id']) {
    event.stopPropagation();
    this.toggleStar.emit(polizaId);
  }
}
