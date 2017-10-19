import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Input() public  currentTime: Date;
  @Output() public restoreTime: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
  }

  restoreHandler() {
    this.restoreTime.emit(this.currentTime);
  }
}
