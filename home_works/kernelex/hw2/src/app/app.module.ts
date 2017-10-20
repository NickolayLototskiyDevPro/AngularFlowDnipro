import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockContainerComponent } from './clock-container/clock-container.component';
import { ShowTimeComponent } from './clock-container/show-time/show-time.component';
import { TimeCapsuleComponent } from './time-capsule/time-capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockContainerComponent,
    ShowTimeComponent,
    TimeCapsuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
