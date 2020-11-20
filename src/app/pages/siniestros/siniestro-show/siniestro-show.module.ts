import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniestroShowRoutingModule } from './siniestro-show-routing.module';
import { SiniestroShowComponent } from './siniestro-show.component';
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

import { ClienteViewModule } from '../../../shared/components/cliente-view/cliente-view.module';
import { PolizaViewModule } from '../../../shared/components/poliza-view/poliza-view.module';
import { SiniestroShowDetallesComponent } from './siniestro-show-detalles/siniestro-show-detalles.component';

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
import { SiniestroShowCondicionMedicaComponent } from './siniestro-show-condicion-medica/siniestro-show-condicion-medica.component';
import { SiniestroShowSctrComponent } from './siniestro-show-sctr/siniestro-show-sctr.component';
import { SiniestroShowSiniestroCgComponent } from './siniestro-show-siniestro-cg/siniestro-show-siniestro-cg.component';
import { SiniestroShowCargaComponent } from './siniestro-show-carga/siniestro-show-carga.component';

// ******************************

@NgModule({
  declarations: [
    SiniestroShowComponent,
    SiniestroShowDetallesComponent,
    SiniestroShowCondicionMedicaComponent,
    SiniestroShowSctrComponent,
    SiniestroShowSiniestroCgComponent,
    SiniestroShowCargaComponent
  ],
  imports: [
    CommonModule,
    SiniestroShowRoutingModule,
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
    ClienteViewModule,
    PolizaViewModule,
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
export class SiniestroShowModule {
}
