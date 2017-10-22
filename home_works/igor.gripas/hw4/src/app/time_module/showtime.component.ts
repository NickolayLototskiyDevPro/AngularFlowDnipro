import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimeService } from './time.service';
import { TimeCapsuleService } from './time.capsule.service';

@Component({
    selector: 'app-show-time',
    template: `
      <div>
        <div>time: {{time}}</div>
        <button (click)="rememberTime()">Remember time</button>
      </div>
    `
})
export class ShowTimeComponent implements OnInit, OnDestroy {
  public time: Date | number;

  constructor(private _timeService: TimeService, private _timeCapsuleService: TimeCapsuleService){};

  ngOnInit(): void {
    this._timeService.Time.subscribe((time) => {
      this.time = time;
    });
  }

  ngOnDestroy(): void {
    this._timeService.Time.unsubscribe();
  }

  public rememberTime(): void {
    this._timeCapsuleService.rememberTime();
  }

}
