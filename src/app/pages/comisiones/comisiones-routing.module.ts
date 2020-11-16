import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'pendientes'
      },
      {
        path: 'pendientes',
        loadChildren: () => import('./comisiones-pendientes/comisiones-pendientes.module').then(m => m.ComisionesPendientesModule)
      },
      {
        path: 'cierres',
        loadChildren: () => import('./comisiones-cierres/comisiones-cierres.module').then(m => m.ComisionesCierresModule)
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComisionesRoutingModule {
}
