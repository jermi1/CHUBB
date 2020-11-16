import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobranzaShowComponent } from './cobranza-show.component';


const routes: Routes = [
  {
    path: '',
    component: CobranzaShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobranzaShowRoutingModule {
}
