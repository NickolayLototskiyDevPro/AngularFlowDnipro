import { Component } from '@angular/core';
import { TimeCapsuleService } from './time.capsule.service';

@Component({
    selector: 'app-time-capsule',
    template: `
      <div>
        <button (click)="showTime()">Show time</button>
      </div>      
    `
})
export class TimeCapsuleComponent {
  constructor(private _timeCapsuleService: TimeCapsuleService) {
  }

  public showTime(): void {
      this._timeCapsuleService.showTime();
  }
}
