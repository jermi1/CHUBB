import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComisionesCierresComponent } from './comisiones-cierres.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';

// import { ComisionesTabsPendientesComponent } from './comisiones-tabs-pendientes/comisiones-tabs-pendientes.component';
// import { ComisionesTabsHistorialCierresComponent } from './comisiones-tabs-historial-cierres/comisiones-tabs-historial-cierres.component';

const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ComisionesCierresComponent,
      },
      {
        path: ':id',
        loadChildren: () => import('./comisiones-cierres-show/comisiones-cierres-show.module').then(m => m.ComisionesCierresShowModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComisionesCierresRoutingModule {
}


// const routes: VexRoutes = [
//     {
//       path: '',
//       children: [
//         {
//           path: '',
//           redirectTo: 'pendientes'
//         },
//         {
//           path: 'pendientes',
//           loadChildren: () => import('./comisiones-pendientes/comisiones-pendientes.module').then(m => m.ComisionesPendientesModule)
//         },
//         {
//           path: 'cierres',
//           loadChildren: () => import('./comisiones-cierres/comisiones-cierres.module').then(m => m.ComisionesCierresModule)
//         }
//       ]
//     } 
//   ];