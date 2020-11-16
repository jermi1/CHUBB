import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {ClienteFormGeneralComponent} from './shared/components/cliente-form/cliente-form-general/cliente-form-general.component';
import {ClienteFormContactoComponent} from './shared/components/cliente-form/cliente-form-contacto/cliente-form-contacto.component';
import {ClienteFormVinculadosComponent} from './shared/components/cliente-form/cliente-form-vinculados/cliente-form-vinculados.component';

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    VexModule,
    CustomLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
