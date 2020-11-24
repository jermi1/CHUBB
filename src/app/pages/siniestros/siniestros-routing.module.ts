import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { SiniestroCargaModule } from './siniestro-carga/siniestro-carga.module';


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
      },
      {
        path: ':carga',
        loadChildren: () => import('./siniestro-carga/siniestro-carga.module').then(m => m.SiniestroCargaModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiniestrosRoutingModule {
}
