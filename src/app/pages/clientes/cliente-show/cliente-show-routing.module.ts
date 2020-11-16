import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteShowComponent } from './cliente-show.component';
import { ClienteShowPolizasComponent } from './cliente-show-polizas/cliente-show-polizas.component';
import { ClienteShowCotizacionesComponent } from './cliente-show-cotizaciones/cliente-show-cotizaciones.component';
import { ClienteShowSiniestrosComponent } from './cliente-show-siniestros/cliente-show-siniestros.component';
import { ClienteShowReportesComponent } from './cliente-show-reportes/cliente-show-reportes.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteShowComponent,
    children: [
      {
        path: '',
        redirectTo: 'polizas',
      },
      {
        path: 'polizas',
        component: ClienteShowPolizasComponent
      },
      {
        path: 'cotizaciones',
        component: ClienteShowCotizacionesComponent
      },
      {
        path: 'siniestros',
        component: ClienteShowSiniestrosComponent
      },
      {
        path: 'reportes',
        component: ClienteShowReportesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteShowRoutingModule {
}

