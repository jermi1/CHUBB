import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cotizacionesData } from '../../../../../static-data/cotizaciones';
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
import { Cotizacion } from '../../interfaces/cotizacion.interface';
import { Router } from '@angular/router';

export let cotizacionIdCounter = 50;

@Component({
  selector: 'vex-cotizaciones-create',
  templateUrl: './cotizaciones-create.component.html',
  styleUrls: ['./cotizaciones-create.component.scss']
})
export class CotizacionesCreateComponent implements OnInit {
  [x: string]: any;

  form = this.fb.group({
    esNuevoCliente: true,
    // email: null,
    // phone: null,
    // company: null,
    // notes: null,
    // birthday: null
  });

  cotizacion: Cotizacion;

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

  constructor(@Inject(MAT_DIALOG_DATA) private cotizacionId: Cotizacion['id'],
              private router: Router,
              private dialogRef: MatDialogRef<CotizacionesCreateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.cotizacionId) {
      this.cotizacion = cotizacionesData.find(c => c.id === this.cotizacionId);
      this.form.patchValue(this.cotizacion);
    }
  }

  toggleStar() {
    if (this.cotizacion) {
      // this.cotizacion.starred = !this.cotizacion.starred;
    }
  }

  save() {
    this.router.navigate(['/cotizaciones/editar']);
    this.dialogRef.close();
    // const form = this.form.value;

    // if (!this.cotizacion) {
    //   this.cotizacion = {
    //     ...form,
    //     id: cotizacionIdCounter++
    //   };
    // }

    // this.cotizacion.name = form.name;
    // this.cotizacion.email = form.email;
    // this.cotizacion.phone = form.email;
    // this.cotizacion.company = form.email;
    // this.cotizacion.notes = form.email;
    // this.cotizacion.birthday = form.email;

    // this.dialogRef.close();
  }
}
