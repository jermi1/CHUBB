import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RenovacionesTableComponent } from './renovaciones-table.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: RenovacionesTableComponent,
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
export class RenovacionesTableRoutingModule {
}
