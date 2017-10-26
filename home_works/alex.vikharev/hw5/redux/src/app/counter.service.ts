import {Injectable} from '@angular/core';
import {NgRedux} from "ng2-redux";
import {IAppState} from "./model/store";
import {ACTIVATE, DECREMENT, INCREMENT} from "./actions";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CounterService {
  isActive$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.isActive$ = this.ngRedux.select(appState => appState.isActive);

  }

  public start(): void {
    setTimeout(() => this.ngRedux.dispatch({type: ACTIVATE}), 2000);
  }

  public increment(): void {
    setTimeout(() => this.ngRedux.dispatch({type: INCREMENT}), 1000);
  }

  public decrement(): void {
    setTimeout(() => this.ngRedux.dispatch({type: DECREMENT}), 1000);
  }

}
