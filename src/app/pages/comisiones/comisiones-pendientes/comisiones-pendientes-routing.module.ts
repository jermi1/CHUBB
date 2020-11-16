import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComisionesPendientesComponent } from './comisiones-pendientes.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: ComisionesPendientesComponent,
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComisionesPendientesRoutingModule {
}
