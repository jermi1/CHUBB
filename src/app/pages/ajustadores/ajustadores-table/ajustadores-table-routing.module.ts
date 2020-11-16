import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AjustadoresTableComponent } from './ajustadores-table.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: AjustadoresTableComponent,
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
export class AjustadoresTableRoutingModule {
}
