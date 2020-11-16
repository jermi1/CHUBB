import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cotizacion } from '../../interfaces/cotizacion.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';

@Component({
  selector: 'vex-cotizaciones-card',
  templateUrl: './cotizaciones-card.component.html',
  styleUrls: ['./cotizaciones-card.component.scss']
})
export class CotizacionesCardComponent implements OnInit {

  @Input() cotizacion: Cotizacion;
  @Output() openCotizacion = new EventEmitter<Cotizacion['id']>();
  @Output() toggleStar = new EventEmitter<Cotizacion['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, cotizacionId: Cotizacion['id']) {
    event.stopPropagation();
    this.toggleStar.emit(cotizacionId);
  }
}
