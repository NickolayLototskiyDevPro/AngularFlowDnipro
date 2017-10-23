import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // SZ template of this component is too big
  // SZ please use separate html file for this purpose
  // SZ html file gives us a lot advantages, syntax highlight for example
  template: `
    <div>
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <app-clock-container #clock (rememberTime)="rememberTimeHandler($event)" [tempTime]="tempTime"></app-clock-container>

    <app-time-capsule [currentTime]="rememberedTime" (restoreTime)="restoreTimeHandler($event)"></app-time-capsule>
  `,
  styles: []
})
export class AppComponent {
  public title: string = 'Clock App';
  public rememberedTime: Date;
  public tempTime: Date;

  public rememberTimeHandler(event: Date) {
    this.rememberedTime = event;
  }

  public restoreTimeHandler(event: Date) {
    this.tempTime = event;
    // SZ each interval and even timeout should be cleand up in onDestroy method
    setTimeout(() => {
        this.tempTime = null;
      }, 3000
     );
  }
}
