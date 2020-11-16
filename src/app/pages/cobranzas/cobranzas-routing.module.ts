import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('./cobranzas-grid/cobranzas-grid.module').then(m => m.CobranzasGridModule)
      // },
      {
        path: '',
        loadChildren: () => import('./cobranzas-table/cobranzas-table.module').then(m => m.CobranzasTableModule)
      },
      {
        path: 'show',
        loadChildren: () => import('./cobranza-show/cobranza-show.module').then(m => m.CobranzaShowModule)
      },
      {
        path: 'editar',
        loadChildren: () => import('./cobranza-edit/cobranza-edit.module').then(m => m.CobranzaEditModule)
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobranzasRoutingModule {
}
