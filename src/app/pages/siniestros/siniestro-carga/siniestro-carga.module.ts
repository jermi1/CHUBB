import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniestroCargaRoutingModule } from './siniestro-carga-routing.module';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
// import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


// *****************************

// import { PolizaEditRoutingModule } from './poliza-edit-routing.module';
// import { PolizaEditComponent } from './poliza-edit.component';
// import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { SiniestroCargaComponent } from './siniestro-carga.component';
import { SiniestroCargaMasivaComponent } from './siniestro-carga-masiva/siniestro-carga-masiva.component';

// ******************************

@NgModule({
  declarations: [
    SiniestroCargaComponent,
    SiniestroCargaMasivaComponent
  ],
  imports: [
    CommonModule,
    SiniestroCargaRoutingModule,
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
    MatSidenavModule,
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
  ]
})
export class SiniestroCargaModule {
}
