import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarEtiquetaComponent } from './agregar-etiqueta.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    declarations: [AgregarEtiquetaComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        FlexLayoutModule,
        MatInputModule,
        MatDividerModule,
        IconModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRadioModule,
        MatDividerModule
    ],
    entryComponents: [AgregarEtiquetaComponent]
  })

  export class AgregarEtiquetasModule {
}