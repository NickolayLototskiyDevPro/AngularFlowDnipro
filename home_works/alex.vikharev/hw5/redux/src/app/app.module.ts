import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from 'ng2-redux'

import {AppComponent} from './app.component';
import {IAppState, INITIAL_STATE, rootReducer} from "./model/store";
import {IncrementComponent} from './components/increment.component';
import {DecrementComponent} from "./components/decrement.component";
import {CounterComponent} from "./components/counter.component";
import {CounterService} from "./counter.service";

@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}



