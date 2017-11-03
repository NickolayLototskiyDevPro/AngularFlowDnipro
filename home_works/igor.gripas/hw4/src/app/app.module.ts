import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeModule } from './time_module/time.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TimeModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
