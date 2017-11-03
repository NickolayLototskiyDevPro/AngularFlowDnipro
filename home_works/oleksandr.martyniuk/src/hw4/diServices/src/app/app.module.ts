import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClockModule } from './modules/clock/clock.module';
import { TimeCapsuleModule } from './modules/time-capsule/time-capsule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClockModule,
    TimeCapsuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
