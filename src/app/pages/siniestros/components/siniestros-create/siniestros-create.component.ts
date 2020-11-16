import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { siniestrosData } from '../../../../../static-data/siniestros';
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
import { Siniestro } from '../../interfaces/siniestro.interface';
import { Router } from '@angular/router';

export let polizaIdCounter = 50;

@Component({
  selector: 'vex-siniestros-create',
  templateUrl: './siniestros-create.component.html',
  styleUrls: ['./siniestros-create.component.scss']
})
export class SiniestrosCreateComponent implements OnInit {
  [x: string]: any;

  form = this.fb.group({
    name: null,
    // email: null,
    // phone: null,
    // company: null,
    // notes: null,
    // birthday: null
  });

  siniestro: Siniestro;

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

  constructor(@Inject(MAT_DIALOG_DATA) private polizaId: Siniestro['id'],
    private router: Router,
    private dialogRef: MatDialogRef<SiniestrosCreateComponent>,
    private fb: FormBuilder) { }

  ngOnInit() {
    if (this.polizaId) {
      this.siniestro = siniestrosData.find(c => c.id === this.polizaId);
      this.form.patchValue(this.siniestro);
    }
  }

  toggleStar() {
    if (this.siniestro) {
      // this.siniestro.starred = !this.siniestro.starred;
    }
  }

  save() {
    this.router.navigate(['/siniestros/editar']);
    this.dialogRef.close();
    // const form = this.form.value;

    // if (!this.siniestro) {
    //   this.siniestro = {
    //     ...form,
    //     id: polizaIdCounter++
    //   };
    // }

    // this.siniestro.name = form.name;
    // this.siniestro.email = form.email;
    // this.siniestro.phone = form.email;
    // this.siniestro.company = form.email;
    // this.siniestro.notes = form.email;
    // this.siniestro.birthday = form.email;

    // this.dialogRef.close();
  }
}
