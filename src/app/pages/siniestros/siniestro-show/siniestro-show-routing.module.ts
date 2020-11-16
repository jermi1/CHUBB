import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiniestroShowComponent } from './siniestro-show.component';

import { SiniestroShowDetallesComponent } from './siniestro-show-detalles/siniestro-show-detalles.component';
import { PolizaViewComponent } from '../../../shared/components/poliza-view/poliza-view.component';
import { ClienteViewComponent } from 'src/app/shared/components/cliente-view/cliente-view.component';

const routes: Routes = [
  {
    path: '',
    component: SiniestroShowComponent,
    children: [
      {
        path: '',
        redirectTo: 'detalles-siniestro'
      },
      {
        path: 'detalles-siniestro',
        component: SiniestroShowDetallesComponent
      },
      {
        path: 'poliza',
        component: PolizaViewComponent
      },
      {
        path: 'cliente',
        component: ClienteViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiniestroShowRoutingModule {
}
