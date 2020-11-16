import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiniestroEditComponent } from './siniestro-edit.component';


const routes: Routes = [
  {
    path: '',
    component: SiniestroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiniestroEditRoutingModule {
}
