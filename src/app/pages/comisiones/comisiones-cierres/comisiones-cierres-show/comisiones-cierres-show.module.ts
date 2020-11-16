import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComisionesCierresShowRoutingModule } from './comisiones-cierres-show-routing.module';
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
import { ComisionesCierresShowComponent } from './comisiones-cierres-show.component';
// import { ComisionesDataTableComponent } from './comisiones-data-table/comisiones-data-table.component';
import { ComisionesCreateModule } from '../../components/comisiones-create/comisiones-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
// import { ComisionesTableMenuComponent } from './comisiones-table-menu/comisiones-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
// import { ComisionesCierresComponent } from './comisiones-cierres/comisiones-tabs-historial-cierres.component';

import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import {CustomTableModule} from '../../../../shared/components/custom-table/custom-table.module';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ComisionesCierresShowDetailsComponent } from './comisiones-cierres-show-details/comisiones-cierres-show-details.component';
import { ComisionesCierresShowSubcierresComponent } from './comisiones-cierres-show-subcierres/comisiones-cierres-show-subcierres.component';

import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ComisionesCierresShowComponent,
    ComisionesCierresShowDetailsComponent,
    ComisionesCierresShowSubcierresComponent,
  ],
  imports: [
    CommonModule,
    ComisionesCierresShowRoutingModule,
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
    MatDividerModule
  ]
})
export class ComisionesCierresShowModule {
}
