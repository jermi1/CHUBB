import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./cotizaciones-table/cotizaciones-table.module').then(m => m.CotizacionesTableModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./cotizacion-show/cotizacion-show.module').then(m => m.CotizacionShowModule)
      },
    //   {
    //     path: 'id:/editar',
    //     loadChildren: () => import('./cotizacion-edit/cotizacion-edit.module').then(m => m.CotizacionEditModule)
    //   },
    //   {
    //     path: 'id:/procesar',
    //     loadChildren: () => import('./cotizacion-procesar/cotizacion-procesar.module').then(m => m.CotizacionProcesarModule)
    //   },
    //   {
    //     path: 'id/:cliente',
    //     loadChildren: () => import('./cotizacion-cliente/cotizacion-cliente.module').then(m => m.CotizacionClienteModule)
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionesRoutingModule {
}
