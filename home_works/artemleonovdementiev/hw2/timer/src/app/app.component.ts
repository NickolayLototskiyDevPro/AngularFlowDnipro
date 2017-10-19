import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <app-clock [savedTime]="savedTime" (getTime)="getCurrentTime($event)"></app-clock>
    <app-timecapsule [currentTime]="currentTime" (showTime)="showSavedTime($event)" (saveTime)="saveTime($event)"></app-timecapsule>
  `,
})
export class AppComponent {
    public savedTime: string;
    public currentTime: string;

    private showSavedTime (savedTime: string): void {
        this.savedTime = savedTime;
    }

    private saveTime (currentTime: string): void {
        this.currentTime = currentTime;
    }

    private getCurrentTime (time: string): void {
        this.currentTime = time;
    }
}
