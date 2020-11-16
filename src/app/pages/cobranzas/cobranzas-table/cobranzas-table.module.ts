import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CobranzasTableRoutingModule } from './cobranzas-table-routing.module';
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
import { CobranzasTableComponent } from './cobranzas-table.component';
import { CobranzasDataTableComponent } from './cobranzas-data-table/cobranzas-data-table.component';
import { CobranzasCreateModule } from '../components/cobranzas-create/cobranzas-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { CobranzasTableMenuComponent } from './cobranzas-table-menu/cobranzas-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { TableFilterModule } from '../../../shared/components/table-filter/table-filter.module';
import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';
import {FilterFormModule} from '../../../shared/components/filter-form/filter-form.module';

import { MatDividerModule } from '@angular/material/divider';

import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FilePickerModule } from '../../../shared/components/file-picker/file-picker.module';

@NgModule({
  declarations: [CobranzasTableComponent, CobranzasDataTableComponent, CobranzasTableMenuComponent],
  imports: [
    CommonModule,
    CobranzasTableRoutingModule,
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
    CobranzasCreateModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    MatTabsModule,
    PageLayoutModule,
    TableFilterModule,
    CustomTableModule,
    FilePickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FilterFormModule,
    MatDividerModule
  ]
})
export class CobranzasTableModule {
}
