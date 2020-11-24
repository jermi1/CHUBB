import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiniestroShowCargaComponent } from '../siniestro-show/siniestro-show-carga/siniestro-show-carga.component';
import { SiniestroCargaMasivaComponent } from './siniestro-carga-masiva/siniestro-carga-masiva.component';
import { SiniestroCargaComponent } from './siniestro-carga.component';

const routes: Routes = [
  {
    path: '',
    component: SiniestroCargaComponent,
    children: [
      {
        path: 'cargaMasiva',
        component: SiniestroCargaMasivaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiniestroCargaRoutingModule {
}
