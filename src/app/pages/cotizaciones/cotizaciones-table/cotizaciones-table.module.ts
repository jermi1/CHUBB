import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionesTableRoutingModule } from './cotizaciones-table-routing.module';
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
import { CotizacionesTableComponent } from './cotizaciones-table.component';
import { CotizacionesDataTableComponent } from './cotizaciones-data-table/cotizaciones-data-table.component';
import { CotizacionesCreateModule } from '../components/cotizaciones-create/cotizaciones-create.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { CotizacionesTableMenuComponent } from './cotizaciones-table-menu/cotizaciones-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CustomTableModule } from '../../../shared/components/custom-table/custom-table.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableFilterModule } from '../../../shared/components/table-filter/table-filter.module';
import { StringMaxLenghtModule } from '../../../pipes/string-max-lenght/string-max-lenght.module';


@NgModule({
    declarations: [
        CotizacionesTableComponent,
        CotizacionesDataTableComponent,
        CotizacionesTableMenuComponent
    ],
    imports: [
        CommonModule,
        CotizacionesTableRoutingModule,
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
        CotizacionesCreateModule,
        ReactiveFormsModule,
        ContainerModule,
        MatSidenavModule,
        CustomTableModule,
        MatTooltipModule,
        TableFilterModule,
        StringMaxLenghtModule
    ]
})
export class CotizacionesTableModule {
}
