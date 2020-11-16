import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiniestrosCardComponent } from './siniestros-card.component';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [SiniestrosCardComponent],
  imports: [
    CommonModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [SiniestrosCardComponent]
})
export class SiniestrosCardModule {
}
