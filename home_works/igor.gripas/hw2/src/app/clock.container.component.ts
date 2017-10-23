import {Component, OnInit, OnDestroy, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-clock-container',
  template: `
    <app-show-time [time]="time || currentTime" (rememberTime)="onRememberTime($event)"></app-show-time>
  `
})
export class ClockContainer implements OnInit, OnDestroy {
  @Input()
  public time: Date;

  @Output()
  public rememberTime: EventEmitter<Date> = new EventEmitter();

  private currentTime: Date;
  private interval: NodeJS.Timer;


  public ngOnInit(): void {
    this.currentTime = new Date();
    this.interval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  public onRememberTime(data): void {
    this.rememberTime.emit(data);
  }
}
