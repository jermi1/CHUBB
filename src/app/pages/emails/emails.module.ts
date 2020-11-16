import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { GoogleApiModule, GoogleApiService, GoogleAuthService, NgGapiClientConfig, NG_GAPI_CONFIG, GoogleApiConfig } from "ng-gapi";

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsComponent } from './emails.component';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "258268860383-1ln1mmm72rrgd0gt0oi2aj1evn9imaj1.apps.googleusercontent.com",
  discoveryDocs: ['https://mail.google.com/'],
  scope: 'https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly ',
  redirect_uri: ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"].join(" ")
};

@NgModule({
  declarations: [
    EmailsComponent
  ],
  imports: [

    CommonModule,
    EmailsRoutingModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: []
})
export class EmailModule { }