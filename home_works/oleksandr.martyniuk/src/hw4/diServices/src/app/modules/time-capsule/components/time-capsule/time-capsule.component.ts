import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { TimeCapsuleService } from '../../services/time-capsule.service';

@Component({
  selector: 'app-time-capsule',
  template: `
  <div>
  <button (click)="freezeRemembered()">Freeze remembered</button>
  <br/>
  <h4>Remembered value:
   <span *ngIf="remembered; else no_data">{{remembered | date:'mediumTime'}}</span>
   <ng-template #no_data>N/A</ng-template>
   </h4>
  <div>`,
  styles: [
    ':host{ text-align: center;}'
  ]
})
export class TimeCapsuleComponent implements OnInit {
  constructor(private capsuleService: TimeCapsuleService) { }

  private remembered: Date = null;

  public ngOnInit(): void {
    this.capsuleService.savedTimeUpdated.subscribe((newValue: Date) => {
      this.remembered = newValue;
    });
  }

  public freezeRemembered(): void {
    if (this.remembered) {
      this.capsuleService.freezeTime(5000);
    }
  }
}
