import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import {ClienteViewComponent} from './cliente-view.component';

@NgModule({
  declarations: [
    ClienteViewComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    ClienteViewComponent,
  ]
})
export class ClienteViewModule {

}
