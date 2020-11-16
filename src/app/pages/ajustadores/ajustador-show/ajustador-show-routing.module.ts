import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjustadorShowComponent } from './ajustador-show.component';


const routes: Routes = [
  {
    path: '',
    component: AjustadorShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjustadorShowRoutingModule {
}
