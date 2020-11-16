import { Component, OnInit, Input } from '@angular/core';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { Comision } from 'src/app/pages/comisiones/interfaces/comision.interface';

@Component({
  selector: 'vex-referenciador-show-comisines',
  templateUrl: './referenciador-show-comisines.component.html',
  styleUrls: ['./referenciador-show-comisines.component.scss'],
  animations: [fadeInRight400ms, stagger40ms]
})
export class ReferenciadorShowComisinesComponent implements OnInit {

  current = 'comisiones';

  @Input() comision: Comision;

  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.current = tab;
  }
}
