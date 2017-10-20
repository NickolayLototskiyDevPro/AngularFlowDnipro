import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MorsePipe } from './pipes/morse.pipe';
import {FormsModule} from "@angular/forms";
import { EvenPipe } from './pipes/even.pipe';
import { ColoredGridComponent } from './colored-grid/colored-grid.component';
import { ItemHighlightDirective } from './directives/item-highlight.directive';
import { GridColorsDirective } from './directives/grid-colors.directive';
import {SimpleGridComponent} from "./simple-grid/simple-grid.component";

@NgModule({
  declarations: [
    AppComponent,
    MorsePipe,
    EvenPipe,
    ColoredGridComponent,
    ItemHighlightDirective,
    GridColorsDirective,
    SimpleGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
