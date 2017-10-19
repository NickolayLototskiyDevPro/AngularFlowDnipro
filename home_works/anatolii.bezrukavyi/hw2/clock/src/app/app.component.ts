import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  tickPeriod: number = 1000;
  timeToRemember: number = 0;
  temporaryTime: number = 0;
  showTemporaryTime: boolean = false;

  public rememberTimeClicked(time: number): void {
    this.timeToRemember = time;
  }

  public showTimeClicked(time: number): void {
    this.temporaryTime = time;
    setTimeout(():void => { this.temporaryTime = 0; }, 3000);
  }
}
