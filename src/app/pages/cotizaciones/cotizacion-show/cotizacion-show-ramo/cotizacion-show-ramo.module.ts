import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CotizacionShowRamoComponent } from './cotizacion-show-ramo.component';
import { CotizacionShowRamoAutosComponent } from './cotizacion-show-ramo-autos/cotizacion-show-ramo-autos.component';
import { CotizacionShowRamoVidaComponent } from './cotizacion-show-ramo-vida/cotizacion-show-ramo-vida.component';
import { CotizacionShowRamoSctrComponent } from './cotizacion-show-ramo-sctr/cotizacion-show-ramo-sctr.component';
import { CotizacionShowRamoOtrosComponent } from './cotizacion-show-ramo-otros/cotizacion-show-ramo-otros.component';

@NgModule({
    declarations: [
        CotizacionShowRamoComponent,
        CotizacionShowRamoAutosComponent,
        CotizacionShowRamoVidaComponent,
        CotizacionShowRamoSctrComponent,
        CotizacionShowRamoOtrosComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
        IconModule,
        FlexLayoutModule
    ]
})
export class CotizacionShowRamoModule {
}
