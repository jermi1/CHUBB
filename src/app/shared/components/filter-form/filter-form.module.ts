import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterFormComponent } from './filter-form.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';

import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        FilterFormComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        MatSelectModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatMenuModule,
        IconModule,
        MatIconModule
    ],
    exports: [
        FilterFormComponent,
    ]
})
export class FilterFormModule {

}
