import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { comisionesData } from '../../../../../static-data/comisiones';
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
import { Comision } from '../../interfaces/comision.interface';
import { Router } from '@angular/router';

export let polizaIdCounter = 50;

@Component({
  selector: 'vex-comisiones-create',
  templateUrl: './comisiones-create.component.html',
  styleUrls: ['./comisiones-create.component.scss']
})
export class ComisionesCreateComponent implements OnInit {
  [x: string]: any;

  form = this.fb.group({
    name: null,
    // email: null,
    // phone: null,
    // company: null,
    // notes: null,
    // birthday: null
  });

  comision: Comision;

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

  constructor(@Inject(MAT_DIALOG_DATA) private polizaId: Comision['id'],
              private router: Router,
              private dialogRef: MatDialogRef<ComisionesCreateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.polizaId) {
      this.comision = comisionesData.find(c => c.id === this.polizaId);
      this.form.patchValue(this.comision);
    }
  }

  toggleStar() {
    if (this.comision) {
      // this.comision.starred = !this.comision.starred;
    }
  }

  save() {
    // this.router.navigate(['/comisiones/editar']);
    this.dialogRef.close();
    // const form = this.form.value;

    // if (!this.comision) {
    //   this.comision = {
    //     ...form,
    //     id: polizaIdCounter++
    //   };
    // }

    // this.comision.name = form.name;
    // this.comision.email = form.email;
    // this.comision.phone = form.email;
    // this.comision.company = form.email;
    // this.comision.notes = form.email;
    // this.comision.birthday = form.email;

    // this.dialogRef.close();
  }
}
