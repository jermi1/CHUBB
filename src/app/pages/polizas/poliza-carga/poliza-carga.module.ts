import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizaCargaComponent } from './poliza-carga.component';
import { PolizaCargaRoutingModule } from './poliza-carga-routing.module';
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
import {MatDividerModule} from '@angular/material/divider';


import {EvidenciasViewModule} from '../../../shared/components/evidencias-view/evidencias-view.module';

@NgModule({
  declarations: [PolizaCargaComponent],
  imports: [
    CommonModule,
    PolizaCargaRoutingModule,
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
    MatTableModule,
    MatDividerModule,
    EvidenciasViewModule
  ]
})
export class PolizaCargaModule {
}
