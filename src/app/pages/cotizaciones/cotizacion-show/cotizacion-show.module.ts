import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionShowRoutingModule } from './cotizacion-show-routing.module';
import { CotizacionShowComponent } from './cotizacion-show.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteFormModule } from '../../../shared/components/cliente-form/cliente-form.module';
import { EvidenciasViewModule } from '../../../shared/components/evidencias-view/evidencias-view.module';
import { CotizacionShowRamoModule } from './cotizacion-show-ramo/cotizacion-show-ramo.module';
import { CotizacionShowClienteComponent } from './cotizacion-show-cliente/cotizacion-show-cliente.component';
import { CotizacionShowEvidenciasComponent } from './cotizacion-show-evidencias/cotizacion-show-evidencias.component';
import { CotizacionShowListComponent } from './cotizacion-show-list/cotizacion-show-list.component';
import { CotizacionShowAseguradorasComponent } from './cotizacion-show-aseguradoras/cotizacion-show-aseguradoras.component';


import {CustomTableModule} from '../../../shared/components/custom-table/custom-table.module';

import { FilePickerModule } from '../../../shared/components/file-picker/file-picker.module';

import { AseguradoraThumbModule } from '../../../shared/components/aseguradora-thumb/aseguradora-thumb.module';

@NgModule({
    declarations: [
        CotizacionShowComponent,
        // CotizacionShowRamoComponent,
        CotizacionShowClienteComponent,
        CotizacionShowEvidenciasComponent,
        CotizacionShowListComponent,
        CotizacionShowAseguradorasComponent
    ],
    imports: [
        CommonModule,
        CotizacionShowRamoModule,
        CotizacionShowRoutingModule,
        PageLayoutModule,
        BreadcrumbsModule,
        MatTabsModule,
        FlexLayoutModule,
        ContainerModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        IconModule,
        MatSidenavModule,
        MatListModule,
        MatDividerModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        EvidenciasViewModule,
        FormsModule,
        ReactiveFormsModule,
        ClienteFormModule,
        CustomTableModule,
        FilePickerModule,
        AseguradoraThumbModule
    ]
})
export class CotizacionShowModule {
}
