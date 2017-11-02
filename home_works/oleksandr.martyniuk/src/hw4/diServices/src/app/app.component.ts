import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='wrapper'>
    <app-clock-container (onTimeRemembered)="passTimeToCapsule($event)" [timeToFreeze]='emitted'></app-clock-container>
    <app-time-capsule [remembered]="remembered" (emitted)="passTimeToContainer($event)"></app-time-capsule>
  </div>`,
  styles: [
    `.wrapper { display: flex;}`
  ]
})
export class AppComponent {
  title = 'app';

  public remembered: Date;
  public emitted: Date;

  public passTimeToCapsule(value: Date): void {
    if (value) {
      this.remembered = value;
    }
  }

  public passTimeToContainer(value: Date): void {
    if (value) {
      this.emitted = new Date(value.getTime());
    }
  }
}
