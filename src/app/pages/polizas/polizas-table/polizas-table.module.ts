import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizasTableRoutingModule } from './polizas-table-routing.module';
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
import { PolizasTableComponent } from './polizas-table.component';
import { PolizasDataTableComponent } from './polizas-data-table/polizas-data-table.component';
import { PolizasCreateModule } from '../components/polizas-create/polizas-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { PolizasTableMenuComponent } from './polizas-table-menu/polizas-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatTooltipModule } from '@angular/material/tooltip';

import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';


import { TableFilterModule } from '../../../shared/components/table-filter/table-filter.module';

@NgModule({
  declarations: [PolizasTableComponent, PolizasDataTableComponent, PolizasTableMenuComponent],
  imports: [
    CommonModule,
    PolizasTableRoutingModule,
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
    PolizasCreateModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    CustomTableModule,
    MatTooltipModule,
    TableFilterModule
  ]
})
export class PolizasTableModule {
}
