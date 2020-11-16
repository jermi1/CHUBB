import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { CustomTableComponent} from './custom-table.component';
import { StringMaxLenghtModule } from '../../../pipes/string-max-lenght/string-max-lenght.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
// import { ContainerModule } from '../../../../@vex/directives/container/container.module';
// import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';

@NgModule({
    declarations: [
        CustomTableComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        MatTableModule,
        StringMaxLenghtModule,
        MatCheckboxModule,
        ColorFadeModule,
        IconModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        ScrollbarModule
    ],
    exports: [
        CustomTableComponent,
        StringMaxLenghtModule
    ]
})

export class CustomTableModule { }