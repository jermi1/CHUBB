import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenciadorGridRoutingModule } from './referenciador-grid-routing.module';
import { ReferenciadorGridComponent } from './referenciador-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReferenciadorEditModule } from '../components/referenciador-edit/referenciador-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReferenciadorCardModule } from '../components/referenciador-card/referenciador-card.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';


@NgModule({
  declarations: [ReferenciadorGridComponent],
  imports: [
    CommonModule,
    ReferenciadorGridRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatDialogModule,
    ReferenciadorEditModule,
    MatIconModule,
    MatTooltipModule,
    ReferenciadorCardModule,
    ContainerModule,
    ColorFadeModule
  ]
})
export class ReferenciadorGridModule {
}
