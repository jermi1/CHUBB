import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { ClienteFormArchivosComponent} from './cliente-form-archivos.component';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';

import { ArchivosComponent } from './archivos/archivos.component';

@NgModule({
    declarations: [
        ClienteFormArchivosComponent, 
        ArchivosComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        MatDividerModule,
        MatButtonModule,
        MatMenuModule,
        IconModule,
        MatIconModule
    ],
    exports: [

        ClienteFormArchivosComponent
    ]
})

export class ClienteFormArchivosModule { }