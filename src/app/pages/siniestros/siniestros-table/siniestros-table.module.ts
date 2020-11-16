import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniestrosTableRoutingModule } from './siniestros-table-routing.module';
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
import { SiniestrosTableComponent } from './siniestros-table.component';
import { SiniestrosDataTableComponent } from './siniestros-data-table/siniestros-data-table.component';
import { SiniestrosCreateModule } from '../components/siniestros-create/siniestros-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { SiniestrosTableMenuComponent } from './siniestros-table-menu/siniestros-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatTooltipModule } from '@angular/material/tooltip';
import { TableFilterModule } from '../../../shared/components/table-filter/table-filter.module';
import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';

@NgModule({
  declarations: [SiniestrosTableComponent, SiniestrosDataTableComponent, SiniestrosTableMenuComponent],
  imports: [
    CommonModule,
    SiniestrosTableRoutingModule,
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
    SiniestrosCreateModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    MatTooltipModule,
    TableFilterModule,
    CustomTableModule
  ]
})
export class SiniestrosTableModule {
}
