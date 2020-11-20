import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
        {
            path: '',
            loadChildren: () => import('./usuario-table/usuario-table.module').then(m => m.UsuarioTableModule)
        },
        {
            path: 'crear',
            loadChildren: () => import('./usuario-crear/usuario-crear.module').then(m => m.UsuarioCrearModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuarioRoutingModule {
}
