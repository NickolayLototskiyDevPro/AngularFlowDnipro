import {Component, OnInit} from '@angular/core';
import {TimeCapsuleService} from "../services/time-capsule.service";
import {TimeService} from "../services/time.service";

@Component({
  selector: 'app-time-capsule',
  template: `
    <div class="bg">
      <p>Time capsule: {{currentTime | date:'mediumTime'}}</p>
      <button (click)="restoreHandler()">Show Remembered</button>
    </div>
  `,
  styles: [`
    .bg {
      background-color: darkgray;
      padding: 10px;
      max-width: 250px;
    }
  `]
})
export class TimeCapsuleComponent implements OnInit {
  public currentTime: Date;

  constructor(private timeCapsuleService: TimeCapsuleService, private timeService: TimeService) {

  }

  ngOnInit() {
    this.timeCapsuleService.rememberedTime$.subscribe((time) => {
      this.currentTime = time;
    });
  }

  public restoreHandler(): void {
    this.timeService.restoreTime(this.currentTime);
  }
}
