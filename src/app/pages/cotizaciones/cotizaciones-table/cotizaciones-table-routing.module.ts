import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CotizacionesTableComponent } from './cotizaciones-table.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: CotizacionesTableComponent,
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
export class CotizacionesTableRoutingModule {
}
