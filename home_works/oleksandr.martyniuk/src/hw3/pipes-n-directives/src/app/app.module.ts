import { ColoredTableDirective } from './directives/colored-table.directive';
import { EvenPipe } from './pipes/even.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MorsePipe } from './pipes/morse.pipe';
import { CustomRadiobuttonDirective } from './directives/custom-radiobutton.directive';

@NgModule({
  declarations: [
    AppComponent,
    MorsePipe,
    EvenPipe,
    CustomRadiobuttonDirective,
    ColoredTableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ngrxStore effects!!!
// XUNIT!