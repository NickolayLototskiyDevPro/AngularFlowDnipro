import { Component } from '@angular/core';
import {CounterService} from "./counter.service";

@Component({
    selector: 'increment',
    template: `
      <div>
        <button (click)="increment()">       +        </button>
      </div>      
    `
})
export class IncrementComponent {
  constructor(private _counterService: CounterService) {
  }

  public increment(): void {
      this._counterService.increment();
  }
}
