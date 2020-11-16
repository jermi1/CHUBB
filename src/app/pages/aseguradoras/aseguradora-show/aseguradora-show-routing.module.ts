import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AseguradoraShowComponent } from './aseguradora-show.component';


const routes: Routes = [
  {
    path: '',
    component: AseguradoraShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseguradoraShowRoutingModule {
}
