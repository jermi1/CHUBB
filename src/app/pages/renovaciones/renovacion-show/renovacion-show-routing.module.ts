import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenovacionShowComponent } from './renovacion-show.component';


const routes: Routes = [
  {
    path: '',
    component: RenovacionShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenovacionShowRoutingModule {
}
