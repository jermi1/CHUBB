import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { referenciadoresData } from '../../../../../static-data/referenciadores';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icPerson from '@iconify/icons-ic/twotone-person';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { FormBuilder } from '@angular/forms';
import { Referenciador } from '../../interfaces/referenciador.interface';

export let referenciadorIdCounter = 50;

@Component({
  selector: 'vex-referenciador-edit',
  templateUrl: './referenciador-edit.component.html',
  styleUrls: ['./referenciador-edit.component.scss']
})
export class ReferenciadorEditComponent implements OnInit {

  form = this.fb.group({
    name: null,
    email: null,
    phone: null,
    company: null,
    notes: null,
    birthday: null
  });

  referenciador: Referenciador;

  icStar = icStar;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icBusiness = icBusiness;
  icPerson = icPerson;
  icEmail = icEmail;
  icPhone = icPhone;


  constructor(@Inject(MAT_DIALOG_DATA) private referenciadorId: Referenciador['id'],
              private dialogRef: MatDialogRef<ReferenciadorEditComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.referenciadorId) {
      this.referenciador = referenciadoresData.find(c => c.id === this.referenciadorId);
      this.form.patchValue(this.referenciador);
    }
  }

  toggleStar() {
    if (this.referenciador) {
      this.referenciador.starred = !this.referenciador.starred;
    }
  }

  save() {
    const form = this.form.value;

    if (!this.referenciador) {
      this.referenciador = {
        ...form,
        id: referenciadorIdCounter++
      };
    }

    this.referenciador.name = form.name;
    this.referenciador.email = form.email;
    this.referenciador.phone = form.phone;
    this.referenciador.company = form.company;
    this.referenciador.notes = form.notes;
    this.referenciador.birthday = form.birthday;

    this.dialogRef.close();
  }
}
