import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenciadorShowRoutingModule } from './referenciador-show-routing.module';
import { ReferenciadorShowComponent } from './referenciador-show.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';

import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';


import { ReferenciadoresShowPolizasComponent } from './referenciadores-show-polizas/referenciadores-show-polizas.component';

import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';
import { ReferenciadorShowCotizacionesComponent } from './referenciador-show-cotizaciones/referenciador-show-cotizaciones.component';
import { ReferenciadorShowSiniestrosComponent } from './referenciador-show-siniestros/referenciador-show-siniestros.component';
import { ReferenciadorShowReportesComponent } from './referenciador-show-reportes/referenciador-show-reportes.component';
import { ReferenciadorShowComisinesComponent } from './referenciador-show-comisiones/referenciador-show-comisines.component';

import { ComisionesCierresComponent } from './comisiones-cierres/comisiones-cierres.component';
import { ComisionesPendientesComponent } from './comisiones-pendientes/comisiones-pendientes.component';
import { ComisionesCierresDetalleComponent } from './comisiones-cierres/comisiones-cierres-detalle/comisiones-cierres-detalle.component';

import { EditarFacturaModule } from '../components/editar-factura/editar-factura.module';


@NgModule({
  declarations: [
    ReferenciadorShowComponent,
    ReferenciadoresShowPolizasComponent,
    ReferenciadorShowCotizacionesComponent,
    ReferenciadorShowSiniestrosComponent,
    ReferenciadorShowReportesComponent,
    ReferenciadorShowComisinesComponent,
    ComisionesCierresComponent,
    ComisionesPendientesComponent,
    ComisionesCierresDetalleComponent
  ],
  imports: [
    CommonModule,
    ReferenciadorShowRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
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
    CustomTableModule,
    EditarFacturaModule
  ]
})
export class ReferenciadorShowModule {
}
