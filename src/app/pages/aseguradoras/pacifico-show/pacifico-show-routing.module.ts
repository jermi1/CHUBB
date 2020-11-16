import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacificoShowComponent } from './pacifico-show.component';


const routes: Routes = [
  {
    path: '',
    component: PacificoShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PacificoShowRoutingModule {
}
