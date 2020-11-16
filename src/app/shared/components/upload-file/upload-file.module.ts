import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { UploadFileComponent } from './upload-file.component';

import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
 
  ],
  entryComponents: [UploadFileComponent]
})
export class TableFilterModule {
}
