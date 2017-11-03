import {Component, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-increment',
  template: `
    <button (click)="increment()"> +</button>`,
  styles: []
})
export class IncrementComponent implements OnInit {

  constructor(private couterService: CounterService) {
  }

  ngOnInit() {
  }

  increment() {
    this.couterService.increment();
  }


}
