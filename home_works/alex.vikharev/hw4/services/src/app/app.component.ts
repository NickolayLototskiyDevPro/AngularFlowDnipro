import {Component} from '@angular/core';
import {TimeCapsuleService} from "./clock/services/time-capsule.service";
import {TimeService} from "./clock/services/time.service";

@Component({
  selector: 'app-root',

  template: `
    <div>
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <app-clock-container></app-clock-container>
    <app-time-capsule></app-time-capsule>
  `,
  styles: [],
  providers: [TimeCapsuleService, TimeService]
})
export class AppComponent {
  public title: string = 'Clock App';
}
