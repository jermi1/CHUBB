import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes, VexRoute } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./polizas-table/polizas-table.module').then(m => m.PolizasTableModule)
      },
      {
        path: ':id/editar',
        loadChildren: () => import('./poliza-edit/poliza-edit.module').then(m => m.PolizaEditModule)
      },
      {
        path: 'carga',
        loadChildren: () => import('./poliza-carga/poliza-carga.module').then(m => m.PolizaCargaModule)
      },
      {
        path: 'crear',
        loadChildren: () => import('./poliza-edit/poliza-edit.module').then(m => m.PolizaEditModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./poliza-show/poliza-show.module').then(m => m.PolizaShowModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizasRoutingModule {
}
