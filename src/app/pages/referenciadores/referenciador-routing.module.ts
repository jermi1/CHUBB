import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./referenciador-table/referenciador-table.module').then(m => m.ReferenciadorTableModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./referenciador-show/referenciador-show.module').then(m => m.ReferenciadorShowModule)
      },
      {
        path: 'id:/editar',
        loadChildren: () => import('./referenciador-edit/referenciador-edit.module').then(m => m.ReferenciadorEditModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReferenciadorRoutingModule {
}
