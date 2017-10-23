import { Component, OnInit, OnDestroy } from '@angular/core';
import {CounterService} from "./counter.service";

@Component({
    selector: 'counter',
    template: `
      <div>
        <span>Counter: {{count}}</span>
      </div>      
    `
})
export class CounterComponent implements OnInit, OnDestroy {
  public count: number;
  constructor(private _counterService: CounterService) {
  }

  public ngOnInit(): void {
    this._counterService.init();
    this._counterService.Count.subscribe((state) => {
      this.count = state.count;
    })
  }

  ngOnDestroy(): void {
    this._counterService.Count.unsubscribe();
  }
}
