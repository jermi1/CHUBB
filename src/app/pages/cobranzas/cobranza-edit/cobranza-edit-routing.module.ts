import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobranzaEditComponent } from './cobranza-edit.component';


const routes: Routes = [
  {
    path: '',
    component: CobranzaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobranzaEditRoutingModule {
}
