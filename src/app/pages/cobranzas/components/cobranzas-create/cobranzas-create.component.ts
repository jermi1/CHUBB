import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cobranzasData } from '../../../../../static-data/cobranzas';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { FormBuilder } from '@angular/forms';
import { Cobranza } from '../../interfaces/cobranza.interface';
import { Router } from '@angular/router';

export let polizaIdCounter = 50;

@Component({
  selector: 'vex-cobranzas-create',
  templateUrl: './cobranzas-create.component.html',
  styleUrls: ['./cobranzas-create.component.scss']
})
export class CobranzasCreateComponent implements OnInit {
  [x: string]: any;

  form = this.fb.group({
    name: null,
    // email: null,
    // phone: null,
    // company: null,
    // notes: null,
    // birthday: null
  });

  cobranza: Cobranza;

  icStar = icStar;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icBusiness = icBusiness;
  icSearch = icSearch;
  icEmail = icEmail;
  icPhone = icPhone;

  constructor(@Inject(MAT_DIALOG_DATA) private polizaId: Cobranza['id'],
              private router: Router,
              private dialogRef: MatDialogRef<CobranzasCreateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.polizaId) {
      this.cobranza = cobranzasData.find(c => c.id === this.polizaId);
      this.form.patchValue(this.cobranza);
    }
  }

  toggleStar() {
    if (this.cobranza) {
      // this.cobranza.starred = !this.cobranza.starred;
    }
  }

  save() {
    this.router.navigate(['/cobranzas/editar']);
    this.dialogRef.close();
    // const form = this.form.value;

    // if (!this.cobranza) {
    //   this.cobranza = {
    //     ...form,
    //     id: polizaIdCounter++
    //   };
    // }

    // this.cobranza.name = form.name;
    // this.cobranza.email = form.email;
    // this.cobranza.phone = form.email;
    // this.cobranza.company = form.email;
    // this.cobranza.notes = form.email;
    // this.cobranza.birthday = form.email;

    // this.dialogRef.close();
  }
}
