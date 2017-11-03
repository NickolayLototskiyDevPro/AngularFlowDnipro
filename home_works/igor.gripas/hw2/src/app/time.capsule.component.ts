import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-time-capsule',
    template: `
      <div>
        <button (click)="showTimeEmit()">Show time</button>
      </div>      
    `
})
export class TimeCapsule  {
  @Input()
  public time: Date;
  @Output()
  public showTime: EventEmitter<Date> = new EventEmitter();

  public showTimeEmit(): void {
      this.showTime.emit(this.time);
  }

}
