import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
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
    setTimeout(() => {
        this.tempTime = null;
      }, 3000
     );
  }
}
