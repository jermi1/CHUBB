import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenovacionEditComponent } from './renovacion-edit.component';


const routes: Routes = [
  {
    path: '',
    component: RenovacionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenovacionEditRoutingModule {
}
