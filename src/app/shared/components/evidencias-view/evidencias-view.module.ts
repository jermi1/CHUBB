import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { EvidenciasViewComponent} from './evidencias-view.component';


@NgModule({
    declarations: [
        EvidenciasViewComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        MatDividerModule,
        MatButtonModule
    ],
    exports: [

        EvidenciasViewComponent
    ]
})

export class EvidenciasViewModule { }