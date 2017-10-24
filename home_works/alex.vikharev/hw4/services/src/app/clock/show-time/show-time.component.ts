import {Component, OnInit} from '@angular/core';
import {TimeService} from "../services/time.service";
import {TimeCapsuleService} from "../services/time-capsule.service";

@Component({
  selector: 'app-show-time',
  template: `
    <div class="bg">
      <p>Time: {{currentTime | date:'mediumTime'}}</p>
      <button (click)="rememberHandler()">Remember</button>
    </div>

  `,
  styles: [`
    .bg {
      background-color: antiquewhite;
      padding: 10px;
    }

    .temp {
      color: magenta;
    }
  `]
})
export class ShowTimeComponent implements OnInit {
  public currentTime: Date;

  constructor(private timeService: TimeService, private timeCapsuleServce: TimeCapsuleService) {
  }

  public rememberHandler(): void {
    this.timeCapsuleServce.setTime(this.currentTime);
  }


  ngOnInit() {
    this.timeService.time$.subscribe((time) => {
        this.currentTime = time;
      }
    );
  }

}
