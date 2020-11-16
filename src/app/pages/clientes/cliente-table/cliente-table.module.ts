import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteTableRoutingModule } from './cliente-table-routing.module';
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
import { ClienteTableComponent } from './cliente-table.component';
import { ClienteDataTableComponent } from './cliente-data-table/cliente-data-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ClienteTableMenuComponent } from './cliente-table-menu/cliente-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';
import { StringMaxLenghtModule } from '../../../pipes/string-max-lenght/string-max-lenght.module';


import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';


import { MatTooltipModule } from '@angular/material/tooltip';
import { TableFilterModule } from '../../../shared/components/table-filter/table-filter.module';
import { AgregarEtiquetasModule } from '../../../shared/components/agregar-etiqueta/agregar-etiqueta.module';

@NgModule({
  declarations: [ClienteTableComponent, ClienteDataTableComponent, ClienteTableMenuComponent],
  imports: [
    CommonModule,
    ClienteTableRoutingModule,
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
    ColorFadeModule,
    StringMaxLenghtModule,
    CustomTableModule,
    MatTooltipModule,
    TableFilterModule,
    AgregarEtiquetasModule
  ]
})
export class ClienteTableModule {
}
