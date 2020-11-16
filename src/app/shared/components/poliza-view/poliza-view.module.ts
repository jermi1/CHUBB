import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolizaViewComponent} from './poliza-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {ClienteFormGeneralComponent} from '../cliente-form/cliente-form-general/cliente-form-general.component';
import {ClienteFormContactoComponent} from '../cliente-form/cliente-form-contacto/cliente-form-contacto.component';
import {ClienteFormVinculadosComponent} from '../cliente-form/cliente-form-vinculados/cliente-form-vinculados.component';
import {ClienteFormComisionesComponent} from '../cliente-form/cliente-form-comisiones/cliente-form-comisiones.component';
import { ClienteFormAccesosComponent } from '../cliente-form/cliente-form-accesos/cliente-form-accesos.component';
import { ClienteFormArchivosModule } from '../cliente-form/cliente-form-archivos/cliente-form-archivos.module';
import { ClientFormAccionistasComponent } from '../cliente-form/client-form-accionistas/client-form-accionistas.component';

// ******

/*
,
        ClienteFormGeneralComponent,
        ClienteFormContactoComponent,
        ClienteFormVinculadosComponent,
        ClienteFormComisionesComponent,
        ClienteFormAccesosComponent,
        ClientFormAccionistasComponent,

*/

// ****


@NgModule({
    declarations: [
        PolizaViewComponent
     ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        FlexLayoutModule,
        MatInputModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTabsModule,
        MatDatepickerModule,
        IconModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatButtonModule,
        MatNativeDateModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        FormsModule,
        RouterModule,
        ClienteFormArchivosModule
    ],
  // entryComponents: [PolizaViewComponent],

    exports: [

        PolizaViewComponent
    ]
})

export class PolizaViewModule { }