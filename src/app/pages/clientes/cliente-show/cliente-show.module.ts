import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteShowRoutingModule } from './cliente-show-routing.module';
import { ClienteShowComponent } from './cliente-show.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
// import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

import { ClienteShowPolizasComponent } from './cliente-show-polizas/cliente-show-polizas.component';
import { ClienteShowCotizacionesComponent } from './cliente-show-cotizaciones/cliente-show-cotizaciones.component';
import { ClienteShowSiniestrosComponent } from './cliente-show-siniestros/cliente-show-siniestros.component';
import { ClienteShowReportesComponent } from './cliente-show-reportes/cliente-show-reportes.component';

import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';

@NgModule({
  declarations: [
    ClienteShowComponent, 
    ClienteShowPolizasComponent, 
    ClienteShowCotizacionesComponent, 
    ClienteShowSiniestrosComponent, 
    ClienteShowReportesComponent
  ],
  imports: [
    CommonModule,
    ClienteShowRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    // PageLayoutDemoModule,
    MatTabsModule,
    FlexLayoutModule,
    ContainerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatNativeDateModule,
    CustomTableModule
  ]
})
export class ClienteShowModule {
}
