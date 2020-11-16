import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Siniestro } from '../../interfaces/siniestro.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';

@Component({
  selector: 'vex-siniestros-card',
  templateUrl: './siniestros-card.component.html',
  styleUrls: ['./siniestros-card.component.scss']
})
export class SiniestrosCardComponent implements OnInit {

  @Input() siniestro: Siniestro;
  @Output() openSiniestro = new EventEmitter<Siniestro['id']>();
  @Output() toggleStar = new EventEmitter<Siniestro['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, polizaId: Siniestro['id']) {
    event.stopPropagation();
    this.toggleStar.emit(polizaId);
  }
}
