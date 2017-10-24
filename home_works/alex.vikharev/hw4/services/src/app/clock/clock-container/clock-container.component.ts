import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimeService} from "../services/time.service";

@Component({
  selector: 'app-clock-container',
  template: `
    <div class="bg">
      <p>Clock-container </p>
      <app-show-time>
      </app-show-time>
    </div>
  `,
  styles: [`
    .bg {
      background-color: aquamarine;
      padding: 10px;
      max-width: 250px;
    }
  `]
})
export class ClockContainerComponent implements OnInit {

  constructor(private timeService: TimeService) {
  }

  ngOnInit() {
    this.timeService.startTimer();
  }

}
