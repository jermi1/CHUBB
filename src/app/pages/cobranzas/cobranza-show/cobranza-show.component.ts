import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icArrowBackIos from '@iconify/icons-ic/twotone-arrow-back-ios';

@Component({
  selector: 'vex-cobranza-show',
  templateUrl: './cobranza-show.component.html',
  styleUrls: ['./cobranza-show.component.scss']
})
export class CobranzaShowComponent implements OnInit {

  icMoreVert = icMoreVert;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  icPhone = icPhone;
  icMail = icMail;
  icArrowBackIos = icArrowBackIos;

  constructor() { }

  ngOnInit() {
  }

}
