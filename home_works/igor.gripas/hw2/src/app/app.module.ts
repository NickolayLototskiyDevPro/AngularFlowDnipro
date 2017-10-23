import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockContainer } from './clock.container.component';
import { ShowTime } from './showtime.component';
import { TimeCapsule } from './time.capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockContainer,
    TimeCapsule,
    ShowTime
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
