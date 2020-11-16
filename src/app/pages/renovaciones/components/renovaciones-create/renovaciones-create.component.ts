import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { renovacionesData } from '../../../../../static-data/renovaciones';
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
import { Renovacion } from '../../interfaces/renovacion.interface';
import { Router } from '@angular/router';

export let renovacionIdCounter = 50;

@Component({
  selector: 'vex-renovaciones-create',
  templateUrl: './renovaciones-create.component.html',
  styleUrls: ['./renovaciones-create.component.scss']
})
export class RenovacionesCreateComponent implements OnInit {
  [x: string]: any;

  form = this.fb.group({
    name: null,
    // email: null,
    // phone: null,
    // company: null,
    // notes: null,
    // birthday: null
  });

  renovacion: Renovacion;

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
  
  nuevaPoliza = true;

  constructor(@Inject(MAT_DIALOG_DATA) private renovacionId: Renovacion['id'],
              private router: Router,
              private dialogRef: MatDialogRef<RenovacionesCreateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.renovacionId) {
      this.renovacion = renovacionesData.find(c => c.id === this.renovacionId);
      this.form.patchValue(this.renovacion);
    }
  }

  toggleStar() {
    if (this.renovacion) {
      // this.renovacion.starred = !this.renovacion.starred;
    }
  }

  cambioMetodo(event: any) {
    if ( event.value == 2 ) {
      this.nuevaPoliza = false;
    } else {
      this.nuevaPoliza = true;
    }
  }


  save() {
    this.router.navigate(['/polizas/editar']);
    this.dialogRef.close();
    // const form = this.form.value;

    // if (!this.renovacion) {
    //   this.renovacion = {
    //     ...form,
    //     id: renovacionIdCounter++
    //   };
    // }

    // this.renovacion.name = form.name;
    // this.renovacion.email = form.email;
    // this.renovacion.phone = form.email;
    // this.renovacion.company = form.email;
    // this.renovacion.notes = form.email;
    // this.renovacion.birthday = form.email;

    // this.dialogRef.close();
  }
}
