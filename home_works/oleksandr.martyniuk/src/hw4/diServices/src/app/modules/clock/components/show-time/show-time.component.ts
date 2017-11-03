import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { ClockService } from '../../services/clock.service';
import { TimeCapsuleService } from '../../../time-capsule/services/time-capsule.service';

@Component({
  selector: 'app-show-time',
  template: `<h4>
  <span *ngIf="displayValue; else no_data">{{displayValue | date:'mediumTime'}}</span>
  <ng-template #no_data>N/A</ng-template>
  </h4>
  <button (click)='rememberTime()'>Remember Time</button>`,
  styles: [
    ':host { background-color: #1976d2; color: white;}',
  ]
})
export class ShowTimeComponent implements OnInit {
  constructor(private clockService: ClockService, private capsule: TimeCapsuleService) { }

  public displayValue: Date;

  public ngOnInit(): void {
    this.clockService.timeUpdated.subscribe(this.updateTime.bind(this));
  }

  private updateTime(date: Date): void {
    this.displayValue = date;
  }

  public rememberTime(): void {
    this.capsule.saveTime(this.displayValue);
  }
}
