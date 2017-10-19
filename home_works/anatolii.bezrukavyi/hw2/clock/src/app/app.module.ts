import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClockContainerComponent } from './clock-container/clock-container.component';
import { ShowTimeComponent } from './show-time/show-time.component';
import { TimeCapsuleComponent } from './time-capsule/time-capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockContainerComponent,
    ShowTimeComponent,
    TimeCapsuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
