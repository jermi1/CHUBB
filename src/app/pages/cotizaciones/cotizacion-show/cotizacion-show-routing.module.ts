import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CotizacionShowComponent } from './cotizacion-show.component';
import { CotizacionShowListComponent } from './cotizacion-show-list/cotizacion-show-list.component';
import { CotizacionShowRamoComponent } from './cotizacion-show-ramo/cotizacion-show-ramo.component';
import { CotizacionShowClienteComponent } from './cotizacion-show-cliente/cotizacion-show-cliente.component';
import { CotizacionShowEvidenciasComponent } from './cotizacion-show-evidencias/cotizacion-show-evidencias.component';
import { CotizacionShowAseguradorasComponent } from './cotizacion-show-aseguradoras/cotizacion-show-aseguradoras.component';

const routes: Routes = [
  {
    path: '',
    component: CotizacionShowComponent,
    children:[
      {
        path: '',
        redirectTo: 'informacion-ramo',
        // component: CotizacionShowComponent
      },
      {
        path: 'informacion-ramo',
        component: CotizacionShowRamoComponent
      },
      {
        path: 'cotizaciones',
        component: CotizacionShowListComponent
      },
      {
        path: 'cliente',
        component: CotizacionShowClienteComponent
      },
      {
        path: 'evidencias',
        component: CotizacionShowEvidenciasComponent
      },
      {
        path: 'aseguradoras',
        component: CotizacionShowAseguradorasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionShowRoutingModule {
}
