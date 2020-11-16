import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { AseguradoraThumbComponent} from './aseguradora-thumb.component';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AseguradoraThumbComponent,
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

        AseguradoraThumbComponent
    ]
})

export class AseguradoraThumbModule { }