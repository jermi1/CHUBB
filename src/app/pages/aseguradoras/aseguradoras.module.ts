import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguradorasRoutingModule } from './aseguradoras-routing.module';
import { AseguradorasComponent } from './aseguradoras.component';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../@vex/directives/container/container.module';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AseguradorasComponent],
  imports: [
    CommonModule,
    AseguradorasRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    MatTabsModule,
    FlexLayoutModule,
    ContainerModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSlideToggleModule
  ]
})
export class AseguradorasModule {
}
