import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clock-container',
  template: `
    <div class="bg">
      <p>Clock-container </p>
      <!--<p>remembered: {{rememberedTime | date:'mediumTime'}}</p>-->
      <!--<p>tempTime: {{tempTime | date:'mediumTime'}}</p>-->

      <app-show-time [currentTime]="time"
                     [tempTime]="tempTime"
                     (rememberTime)="onRememberTime($event)">
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
  public time: Date;
  public rememberedTime: Date;

  @Input()
  public tempTime: Date;

  @Output()
  public rememberTime: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
    this.time = new Date();
    this.startTimer();
  }

  private startTimer(): void {
    // SZ please clean up interval in on destroy method
     setInterval(() => this.time = new Date(), 300);

  }

  // SZ missed access modifier
  onRememberTime(event: Date) {
    this.rememberedTime = event;
    this.rememberTime.emit(event);
  }
}
