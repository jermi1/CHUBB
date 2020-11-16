import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaPositivaShowRoutingModule } from './la-positiva-show-routing.module';
import { LaPositivaShowComponent } from './la-positiva-show.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
    declarations: [LaPositivaShowComponent],
    imports: [
      CommonModule,
      PageLayoutModule,
      BreadcrumbsModule,
      MatTabsModule,
      FlexLayoutModule,
      ContainerModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      IconModule,
      FormsModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatInputModule,
      MatTableModule,
      MatSelectModule,
      MatNativeDateModule,
      MatGridListModule,
      MatSlideToggleModule,
      LaPositivaShowRoutingModule
    ]
  })
  export class LaPositivaShowModule {

  }