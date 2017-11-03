import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-clock-container [time]="timeToShow" (rememberTime)="rememberTime($event)"></app-clock-container>
    <app-time-capsule [time]="rememberedTime" (showTime)="showTime($event)"></app-time-capsule>    
  `
})
export class AppComponent {
  public rememberedTime: Date;
  public timeToShow: Date;

  public rememberTime(time:Date): void {
      this.rememberedTime = time;
  };

  public showTime(time:Date): void {
    this.timeToShow = time;
    setTimeout(() => this.timeToShow = null, 5000);
  };

}
