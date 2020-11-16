import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciadorShowComponent } from './referenciador-show.component';

import { ReferenciadoresShowPolizasComponent } from './referenciadores-show-polizas/referenciadores-show-polizas.component';
import { ReferenciadorShowCotizacionesComponent } from './referenciador-show-cotizaciones/referenciador-show-cotizaciones.component';
import { ReferenciadorShowSiniestrosComponent } from './referenciador-show-siniestros/referenciador-show-siniestros.component';
import { ReferenciadorShowReportesComponent } from './referenciador-show-reportes/referenciador-show-reportes.component';
import { ReferenciadorShowComisinesComponent } from './referenciador-show-comisiones/referenciador-show-comisines.component';

import { ComisionesCierresDetalleComponent } from './comisiones-cierres/comisiones-cierres-detalle/comisiones-cierres-detalle.component';
import { VexRoutes } from './../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: ReferenciadorShowComponent,
    children: [
      {
        path: '',
        redirectTo: 'polizas'
      },
      {
        path: 'polizas',
        component: ReferenciadoresShowPolizasComponent
      },
      {
        path: 'cotizaciones',
        component: ReferenciadorShowCotizacionesComponent
      },
      {
        path: 'siniestros',
        component: ReferenciadorShowSiniestrosComponent
      },
      {
        path: 'reportes',
        component: ReferenciadorShowReportesComponent
      },
      {
        path: 'comisiones',
        component: ReferenciadorShowComisinesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenciadorShowRoutingModule {
}
