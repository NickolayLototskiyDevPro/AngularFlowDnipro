import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MorsePipe } from './morse.pipe';
import { FilterNumbersPipe } from './filterNumbers.pipe';
import { TableColor } from './tableColor.directive';
import { SwitchOnOff } from './switchOnOff.directive';


@NgModule({
  declarations: [
    AppComponent,
    MorsePipe,
    FilterNumbersPipe,
    TableColor,
    SwitchOnOff
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
