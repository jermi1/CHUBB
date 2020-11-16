import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizaShowRoutingModule } from './poliza-show-routing.module';
import { PolizaShowComponent } from './poliza-show.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import {ClienteViewModule} from '../../../shared/components/cliente-view/cliente-view.module';
import {PolizaViewModule} from '../../../shared/components/poliza-view/poliza-view.module';
import {EvidenciasViewModule} from '../../../shared/components/evidencias-view/evidencias-view.module';

import { PolizaShowEndososComponent } from './poliza-show-endosos/poliza-show-endosos.component';
import { PolizaShowDetalleComponent } from './poliza-show-detalle/poliza-show-detalle.component';
import { PolizaShowCronogramaPagosComponent } from './poliza-show-cronograma-pagos/poliza-show-cronograma-pagos.component';
import { PolizaShowClienteComponent } from './poliza-show-cliente/poliza-show-cliente.component';
import { PolizaShowEvidenciasComponent } from './poliza-show-evidencias/poliza-show-evidencias.component';
import { PolizaShowComisionesComponent } from './poliza-show-comisiones/poliza-show-comisiones.component';
import { PolizaShowCotizacionesComponent } from './poliza-show-cotizaciones/poliza-show-cotizaciones.component';
import { PolizaShowSiniestrosComponent } from './poliza-show-siniestros/poliza-show-siniestros.component';
import { ClienteFormModule } from '../../../shared/components/cliente-form/cliente-form.module';

@NgModule({
  declarations: [
    PolizaShowComponent,
    PolizaShowEndososComponent, 
    PolizaShowDetalleComponent, 
    PolizaShowCronogramaPagosComponent, 
    PolizaShowClienteComponent, 
    PolizaShowEvidenciasComponent, 
    PolizaShowComisionesComponent, 
    PolizaShowCotizacionesComponent, 
    PolizaShowSiniestrosComponent
  ],
  imports: [
    CommonModule,
    PolizaShowRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    MatTabsModule,
    FlexLayoutModule,
    ContainerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    IconModule,
    MatSidenavModule,
    MatDividerModule,
    ClienteViewModule,
    PolizaViewModule,
    EvidenciasViewModule,
    ClienteFormModule
  ]
})
export class PolizaShowModule {
}
