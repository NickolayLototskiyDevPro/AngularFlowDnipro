import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClockContainerComponent } from './clock.container.component';
import { TimeCapsuleComponent } from './time.capsule.component';
import { ShowTimeComponent } from './show.time.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockContainerComponent,
    TimeCapsuleComponent,
    ShowTimeComponent
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
