import { Component } from '@angular/core';
import {CounterService} from "./counter.service";

@Component({
    selector: 'decrement',
    template: `
      <div>
        <button (click)="decrement()">       -        </button>
      </div>      
    `
})
export class DecrementComponent {
  constructor(private _counterService: CounterService) {
  }

  public decrement(): void {
      this._counterService.decrement();
  }
}
