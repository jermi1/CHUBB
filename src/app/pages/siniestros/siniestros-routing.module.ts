import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./siniestros-table/siniestros-table.module').then(m => m.SiniestrosTableModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./siniestro-show/siniestro-show.module').then(m => m.SiniestroShowModule)
      },
      {
        path: 'editar',
        loadChildren: () => import('./siniestro-edit/siniestro-edit.module').then(m => m.SiniestroEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiniestrosRoutingModule {
}
