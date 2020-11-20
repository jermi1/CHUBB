import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCargaComponent } from './cliente-carga.component';


const routes: Routes = [
  {
    path: '',
    component: ClienteCargaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteCargaRoutingModule {
}
