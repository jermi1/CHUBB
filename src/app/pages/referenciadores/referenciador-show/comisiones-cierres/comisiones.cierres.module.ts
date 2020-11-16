import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollbarModule } from '../../../../../@vex/components/scrollbar/scrollbar.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { ComisionesCierresComponent } from './comisiones-cierres.component';

import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import {CustomTableModule} from '../../../../shared/components/custom-table/custom-table.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ComisionesCierresDetalleComponent } from './comisiones-cierres-detalle/comisiones-cierres-detalle.component';


@NgModule({
  declarations: [
    ComisionesCierresComponent,
    ComisionesCierresDetalleComponent,
   
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatDialogModule,
    ScrollbarModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    MatTabsModule,
    PageLayoutModule,
    MatSelectModule,
    MatInputModule,
    CustomTableModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class ComisionesCierresModule {
}
