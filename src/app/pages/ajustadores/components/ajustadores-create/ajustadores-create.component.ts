import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ajustadoresData } from '../../../../../static-data/ajustadores';
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
import { Ajustador } from '../../interfaces/ajustador.interface';
import { Router } from '@angular/router';

export let polizaIdCounter = 50;

@Component({
  selector: 'vex-ajustadores-create',
  templateUrl: './ajustadores-create.component.html',
  styleUrls: ['./ajustadores-create.component.scss']
})
export class AjustadoresCreateComponent implements OnInit {
  [x: string]: any;

  form = this.fb.group({
    name: null,
    // email: null,
    // phone: null,
    // company: null,
    // notes: null,
    // birthday: null
  });

  ajustador: Ajustador;

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

  constructor(@Inject(MAT_DIALOG_DATA) private polizaId: Ajustador['id'],
              private router: Router,
              private dialogRef: MatDialogRef<AjustadoresCreateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.polizaId) {
      this.ajustador = ajustadoresData.find(c => c.id === this.polizaId);
      this.form.patchValue(this.ajustador);
    }
  }

  toggleStar() {
    if (this.ajustador) {
      // this.ajustador.starred = !this.ajustador.starred;
    }
  }

  save() {
    this.router.navigate(['/ajustadores/editar']);
    this.dialogRef.close();
    // const form = this.form.value;

    // if (!this.ajustador) {
    //   this.ajustador = {
    //     ...form,
    //     id: polizaIdCounter++
    //   };
    // }

    // this.ajustador.name = form.name;
    // this.ajustador.email = form.email;
    // this.ajustador.phone = form.email;
    // this.ajustador.company = form.email;
    // this.ajustador.notes = form.email;
    // this.ajustador.birthday = form.email;

    // this.dialogRef.close();
  }
}
