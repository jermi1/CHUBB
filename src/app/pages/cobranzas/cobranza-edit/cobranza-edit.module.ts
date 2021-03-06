import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CobranzaEditRoutingModule } from './cobranza-edit-routing.module';
import { CobranzaEditComponent } from './cobranza-edit.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
// import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [CobranzaEditComponent],
  imports: [
    CommonModule,
    CobranzaEditRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    // PageLayoutDemoModule,
    MatTabsModule,
    FlexLayoutModule,
    ContainerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    IconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule
  ]
})
export class CobranzaEditModule {
}
