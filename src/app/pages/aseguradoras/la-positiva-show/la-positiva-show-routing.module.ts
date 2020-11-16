import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaPositivaShowComponent } from './la-positiva-show.component';


const routes: Routes = [
  {
    path: '',
    component: LaPositivaShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaPositivaShowRoutingModule {
}
