import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifariosRoutingModule } from './tarifarios-routing.module';
import { TarifariosComponent } from './tarifarios.component';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CustomTableModule } from '../../shared/components/custom-table/custom-table.module';
import { TableFilterModule } from '../../shared/components/table-filter/table-filter.module';

@NgModule({
    declarations: [TarifariosComponent],
    imports: [
        CommonModule,
        TarifariosRoutingModule,
        PageLayoutModule,
        BreadcrumbsModule,
        MatCardModule,
        MatListModule,
        MatTabsModule,
        FlexLayoutModule,
        ContainerModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        IconModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatDividerModule,
        CustomTableModule,
        MatTooltipModule,
        TableFilterModule
    ]
})

export class TarifariosModule {
}
