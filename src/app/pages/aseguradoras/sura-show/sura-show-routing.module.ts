import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuraShowComponent } from './sura-show.component';


const routes: Routes = [
  {
    path: '',
    component: SuraShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuraShowRoutingModule {
}
