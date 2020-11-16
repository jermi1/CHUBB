import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poliza } from '../../interfaces/poliza.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';

@Component({
  selector: 'vex-polizas-card',
  templateUrl: './polizas-card.component.html',
  styleUrls: ['./polizas-card.component.scss']
})
export class PolizasCardComponent implements OnInit {

  @Input() poliza: Poliza;
  @Output() openPoliza = new EventEmitter<Poliza['id']>();
  @Output() toggleStar = new EventEmitter<Poliza['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, polizaId: Poliza['id']) {
    event.stopPropagation();
    this.toggleStar.emit(polizaId);
  }
}
