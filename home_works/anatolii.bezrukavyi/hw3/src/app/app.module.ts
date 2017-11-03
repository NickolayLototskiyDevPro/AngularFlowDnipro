import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MorsePipe } from './morse.pipe';
import { EvenOddPipe } from './evenodd.pipe';
import { ColoredTableDirective } from './colored-table.directive';

@NgModule({
  declarations: [
    AppComponent,
    MorsePipe,
    EvenOddPipe,
    ColoredTableDirective
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
