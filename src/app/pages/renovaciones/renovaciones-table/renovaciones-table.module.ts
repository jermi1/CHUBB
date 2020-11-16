import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenovacionesTableRoutingModule } from './renovaciones-table-routing.module';
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
import { RenovacionesTableComponent } from './renovaciones-table.component';
import { RenovacionesDataTableComponent } from './renovaciones-data-table/renovaciones-data-table.component';
import { RenovacionesCreateModule } from '../components/renovaciones-create/renovaciones-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RenovacionesTableMenuComponent } from './renovaciones-table-menu/renovaciones-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';

import { TableFilterModule } from '../../../shared/components/table-filter/table-filter.module';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [RenovacionesTableComponent, RenovacionesDataTableComponent, RenovacionesTableMenuComponent],
  imports: [
    CommonModule,
    RenovacionesTableRoutingModule,
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
    RenovacionesCreateModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    PageLayoutModule,
    TableFilterModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class RenovacionesTableModule {
}
