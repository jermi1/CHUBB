import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolizaCargaComponent } from './poliza-carga.component';


const routes: Routes = [
  {
    path: '',
    component: PolizaCargaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizaCargaRoutingModule {
}