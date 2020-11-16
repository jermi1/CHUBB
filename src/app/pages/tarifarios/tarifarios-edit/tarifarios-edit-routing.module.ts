import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifariosEditComponent } from './tarifarios-edit.component';


const routes: Routes = [
  {
    path: '',
    component: TarifariosEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifariosEditRoutingModule {
}
