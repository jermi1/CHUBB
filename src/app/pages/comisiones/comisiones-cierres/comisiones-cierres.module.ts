import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComisionesCierresRoutingModule } from './comisiones-cierres-routing.module';
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
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
// import { ComisionesTabsComponent } from './comisiones-tabs.component';
// import { ComisionesDataTableComponent } from './comisiones-data-table/comisiones-data-table.component';
import { ComisionesCreateModule } from '../components/comisiones-create/comisiones-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
// import { ComisionesTableMenuComponent } from './comisiones-table-menu/comisiones-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
// import { ComisionesTabsPendientesComponent } from './comisiones-tabs-pendientes/comisiones-tabs-pendientes.component';
import { ComisionesCierresComponent } from './comisiones-cierres.component';

import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { EditarFacturaModule } from '../components/editar-factura/editar-factura.module';

import {FilterFormModule} from '../../../shared/components/filter-form/filter-form.module';

import { MatDividerModule } from '@angular/material/divider';


// import { ComisionesCreateModule } from '../components/comisiones-create/comisiones-create.module';

@NgModule({
  declarations: [
    // ComisionesTabsComponent, 
    ComisionesCierresComponent, 
    // ComisionesTabsHistorialCierresComponent, 
  ],
  imports: [
    CommonModule,
    ComisionesCierresRoutingModule,
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
    ComisionesCreateModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    MatTabsModule,
    PageLayoutModule,
    MatSelectModule,
    MatInputModule,
    CustomTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    EditarFacturaModule,
    FilterFormModule,
    MatDividerModule
  ]
})
export class ComisionesCierresModule {
}
