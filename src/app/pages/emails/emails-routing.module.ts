import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailsComponent } from './emails.component';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: '',
    component: EmailsComponent
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmailsRoutingModule { }