import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiniestroShowComponent } from './siniestro-show.component';

import { SiniestroShowDetallesComponent } from './siniestro-show-detalles/siniestro-show-detalles.component';
import { PolizaViewComponent } from '../../../shared/components/poliza-view/poliza-view.component';
import { ClienteViewComponent } from 'src/app/shared/components/cliente-view/cliente-view.component';
import { SiniestroShowCondicionMedicaComponent } from './siniestro-show-condicion-medica/siniestro-show-condicion-medica.component';
import { SiniestroShowSctrComponent } from './siniestro-show-sctr/siniestro-show-sctr.component';
import { SiniestroShowSiniestroCgComponent } from './siniestro-show-siniestro-cg/siniestro-show-siniestro-cg.component';
import { SiniestroShowCargaComponent } from './siniestro-show-carga/siniestro-show-carga.component';

const routes: Routes = [
  {
    path: '',
    component: SiniestroShowComponent,
    children: [
      {
        path: 'detalles-siniestro',
        component: SiniestroShowDetallesComponent
      },
      {
        path: 'sctr',
        component: SiniestroShowSctrComponent
      },
      {
        path: 'siniestro-cg',
        component: SiniestroShowSiniestroCgComponent
      },
      {
        path: 'condicion-medica',
        component: SiniestroShowCondicionMedicaComponent
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
