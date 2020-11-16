import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Renovacion } from '../../interfaces/renovacion.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';

@Component({
  selector: 'vex-renovaciones-card',
  templateUrl: './renovaciones-card.component.html',
  styleUrls: ['./renovaciones-card.component.scss']
})
export class RenovacionesCardComponent implements OnInit {

  @Input() renovacion: Renovacion;
  @Output() openRenovacion = new EventEmitter<Renovacion['id']>();
  @Output() toggleStar = new EventEmitter<Renovacion['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, renovacionId: Renovacion['id']) {
    event.stopPropagation();
    this.toggleStar.emit(renovacionId);
  }
}
