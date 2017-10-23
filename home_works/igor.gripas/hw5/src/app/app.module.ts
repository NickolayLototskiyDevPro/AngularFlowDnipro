import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { CounterComponent } from './counter.component';
import {IncrementComponent} from "./increment.component";
import {DecrementComponent} from "./decrement.component";


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncrementComponent,
    DecrementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
