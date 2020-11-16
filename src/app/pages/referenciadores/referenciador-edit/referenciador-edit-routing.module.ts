import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciadorEditComponent } from './referenciador-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ReferenciadorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenciadorEditRoutingModule {
}
