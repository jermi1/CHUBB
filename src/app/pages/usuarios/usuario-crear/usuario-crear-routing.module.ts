import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCrearComponent } from './usuario-crear.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioCrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioCrearRoutingModule {
}
