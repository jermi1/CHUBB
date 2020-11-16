import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PolizaShowComponent } from './poliza-show.component';
import { PolizaShowDetalleComponent } from './poliza-show-detalle/poliza-show-detalle.component'
import { PolizaShowClienteComponent } from './poliza-show-cliente/poliza-show-cliente.component';
import { PolizaShowEndososComponent } from './poliza-show-endosos/poliza-show-endosos.component';
import { PolizaShowCronogramaPagosComponent } from './poliza-show-cronograma-pagos/poliza-show-cronograma-pagos.component'
import { PolizaShowComisionesComponent } from './poliza-show-comisiones/poliza-show-comisiones.component';
import { PolizaShowSiniestrosComponent } from './poliza-show-siniestros/poliza-show-siniestros.component';
import { PolizaShowEvidenciasComponent } from './poliza-show-evidencias/poliza-show-evidencias.component';
import { PolizaShowCotizacionesComponent } from './poliza-show-cotizaciones/poliza-show-cotizaciones.component';

const routes: Routes = [
  {
    path: '',
    component: PolizaShowComponent,
    children: [
      {
        path: '',
        redirectTo: 'detalle'
      },
      {
        path: 'detalle',
        component: PolizaShowDetalleComponent
      },
      {
        path: 'cliente',
        component: PolizaShowClienteComponent
      },
      {
        path: 'endosos',
        component: PolizaShowEndososComponent
      },
      {
        path: 'cronograma-pagos',
        component: PolizaShowCronogramaPagosComponent
      },
      {
        path: 'comisiones',
        component: PolizaShowComisionesComponent
      },
      {
        path: 'siniestros',
        component: PolizaShowSiniestrosComponent
      },
      {
        path: 'evidencias',
        component: PolizaShowEvidenciasComponent
      },
      {
        path: 'cotizaciones',
        component: PolizaShowCotizacionesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizaShowRoutingModule {
}
