import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { polizasData } from '../../../../../static-data/polizas';
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
import { Poliza } from '../../interfaces/poliza.interface';
import { Router } from '@angular/router';

export let polizaIdCounter = 50;

@Component({
  selector: 'vex-polizas-create',
  templateUrl: './polizas-create.component.html',
  styleUrls: ['./polizas-create.component.scss']
})
export class PolizasCreateComponent implements OnInit {
  [x: string]: any;

  form = this.fb.group({
    esNuevoCliente: false,
    // email: null,
    // phone: null,
    // company: null,
    // notes: null,
    // birthday: null
  });

  poliza: Poliza;

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

  nuevoCliente = false;
  esAgenciamiento = false;

  constructor(@Inject(MAT_DIALOG_DATA) private polizaId: Poliza['id'],
              private router: Router,
              private dialogRef: MatDialogRef<PolizasCreateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.polizaId) {
      this.poliza = polizasData.find(c => c.id === this.polizaId);
      this.form.patchValue(this.poliza);
    }
  }

  toggleStar() {
    if (this.poliza) {
      // this.poliza.starred = !this.poliza.starred;
    }
  }

  save() {
    this.router.navigate(['/polizas/1/editar']);
    this.dialogRef.close();
    // const form = this.form.value;

    // if (!this.poliza) {
    //   this.poliza = {
    //     ...form,
    //     id: polizaIdCounter++
    //   };
    // }

    // this.poliza.name = form.name;
    // this.poliza.email = form.email;
    // this.poliza.phone = form.email;
    // this.poliza.company = form.email;
    // this.poliza.notes = form.email;
    // this.poliza.birthday = form.email;

    // this.dialogRef.close();
  }
}
