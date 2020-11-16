import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjustadorEditComponent } from './ajustador-edit.component';


const routes: Routes = [
  {
    path: '',
    component: AjustadorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjustadorEditRoutingModule {
}
