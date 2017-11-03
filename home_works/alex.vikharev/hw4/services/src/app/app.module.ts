import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClockModule} from "./clock/clock.module";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    ClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
