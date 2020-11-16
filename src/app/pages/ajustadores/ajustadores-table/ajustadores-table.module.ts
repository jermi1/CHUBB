import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjustadoresTableRoutingModule } from './ajustadores-table-routing.module';
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
import { AjustadoresTableComponent } from './ajustadores-table.component';
import { AjustadoresDataTableComponent } from './ajustadores-data-table/ajustadores-data-table.component';
import { AjustadoresCreateModule } from '../components/ajustadores-create/ajustadores-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { AjustadoresTableMenuComponent } from './ajustadores-table-menu/ajustadores-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [AjustadoresTableComponent, AjustadoresDataTableComponent, AjustadoresTableMenuComponent],
  imports: [
    CommonModule,
    AjustadoresTableRoutingModule,
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
    AjustadoresCreateModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule
  ]
})
export class AjustadoresTableModule {
}
