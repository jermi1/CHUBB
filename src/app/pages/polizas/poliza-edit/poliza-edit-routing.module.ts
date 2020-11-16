import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolizaEditComponent } from './poliza-edit.component';


const routes: Routes = [
  {
    path: '',
    component: PolizaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizaEditRoutingModule {
}
