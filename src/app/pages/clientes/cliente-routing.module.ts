import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./cliente-table/cliente-table.module').then(m => m.ClienteTableModule)
      },
      {
        path: 'carga',
        loadChildren: () => import('./cliente-carga/cliente-carga.module').then(m => m.ClienteCargaModule)
      },
      {
        path: 'crear',
        loadChildren: () => import('./cliente-edit/cliente-edit.module').then(m => m.ClienteEditModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./cliente-show/cliente-show.module').then(m => m.ClienteShowModule)
      },
      {
        path: ':id/editar',
        loadChildren: () => import('./cliente-edit/cliente-edit.module').then(m => m.ClienteEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClienteRoutingModule {
}
