import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FordCarComponent } from './ford.car.component';

@NgModule({
  declarations: [
    AppComponent,
    FordCarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
