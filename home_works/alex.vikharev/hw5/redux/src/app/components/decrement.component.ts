import {Component, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-decrement',
  template: `
    <button (click)="decrement()"> -</button>
  `,
  styles: []
})
export class DecrementComponent implements OnInit {

  constructor(private couterService: CounterService) {
  }

  ngOnInit() {
  }

  decrement() {
    this.couterService.decrement();
  }
}
