import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CobranzasTableComponent } from './cobranzas-table.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: CobranzasTableComponent,
    // data: {
    //   scrollDisabled: true,
    //   toolbarShadowEnabled: true
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobranzasTableRoutingModule {
}
