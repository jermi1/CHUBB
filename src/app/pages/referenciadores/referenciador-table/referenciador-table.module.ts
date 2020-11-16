import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenciadorTableRoutingModule } from './referenciador-table-routing.module';
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
import { ReferenciadorTableComponent } from './referenciador-table.component';
import { ReferenciadorDataTableComponent } from './referenciador-data-table/referenciador-data-table.component';
import { ReferenciadorEditModule } from '../components/referenciador-edit/referenciador-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ReferenciadorTableMenuComponent } from './referenciador-table-menu/referenciador-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';


import { MatTooltipModule } from '@angular/material/tooltip';
import { TableFilterModule } from '../../../shared/components/table-filter/table-filter.module';

@NgModule({
  declarations: [
    ReferenciadorTableComponent, 
    ReferenciadorDataTableComponent, 
    ReferenciadorTableMenuComponent
  ],
  imports: [
    CommonModule,
    ReferenciadorTableRoutingModule,
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
    ReferenciadorEditModule,
    ReactiveFormsModule,
    ContainerModule,
    CustomTableModule,
    MatSidenavModule,
    TableFilterModule,
    MatTooltipModule
  ]
})
export class ReferenciadorTableModule {
}
