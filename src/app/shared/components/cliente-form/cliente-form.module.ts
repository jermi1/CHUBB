import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule} from '../../../../@vex/layout/layout.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import {ClienteFormComponent} from './cliente-form.component';
import {ClienteFormGeneralComponent} from './cliente-form-general/cliente-form-general.component';
import {ClienteFormContactoComponent} from './cliente-form-contacto/cliente-form-contacto.component';
import {ClienteFormVinculadosComponent} from './cliente-form-vinculados/cliente-form-vinculados.component';
import {ClienteFormComisionesComponent} from './cliente-form-comisiones/cliente-form-comisiones.component';
import { ClienteFormAccesosComponent } from './cliente-form-accesos/cliente-form-accesos.component';
import { ClienteFormArchivosModule } from './cliente-form-archivos/cliente-form-archivos.module';
import { ClientFormAccionistasComponent } from './client-form-accionistas/client-form-accionistas.component';

@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteFormGeneralComponent,
    ClienteFormContactoComponent,
    ClienteFormVinculadosComponent,
    ClienteFormComisionesComponent,
    ClienteFormAccesosComponent,
    ClientFormAccionistasComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatDialogModule,
    ScrollbarModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    RouterModule,
    LayoutModule,
    ClienteFormArchivosModule
  ],
  exports: [
    ClienteFormComponent,
  ]
})
export class ClienteFormModule {

}
