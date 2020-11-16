import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('./ajustadores-grid/ajustadores-grid.module').then(m => m.AjustadoresGridModule)
      // },
      {
        path: '',
        loadChildren: () => import('./ajustadores-table/ajustadores-table.module').then(m => m.AjustadoresTableModule)
      },
      {
        path: 'show',
        loadChildren: () => import('./ajustador-show/ajustador-show.module').then(m => m.AjustadorShowModule)
      },
      {
        path: 'editar',
        loadChildren: () => import('./ajustador-edit/ajustador-edit.module').then(m => m.AjustadorEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjustadoresRoutingModule {
}
