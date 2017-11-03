import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../model/store";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter$ | async}}</p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.counter$ = this.ngRedux.select(appState => appState.counter);
  }

}
