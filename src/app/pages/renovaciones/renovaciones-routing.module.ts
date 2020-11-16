import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('./renovaciones-grid/renovaciones-grid.module').then(m => m.RenovacionesGridModule)
      // },
      {
        path: '',
        loadChildren: () => import('./renovaciones-table/renovaciones-table.module').then(m => m.RenovacionesTableModule)
      },
      {
        path: 'show',
        loadChildren: () => import('./renovacion-show/renovacion-show.module').then(m => m.RenovacionShowModule)
      },
      {
        path: 'editar',
        loadChildren: () => import('./renovacion-edit/renovacion-edit.module').then(m => m.RenovacionEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenovacionesRoutingModule {
}
