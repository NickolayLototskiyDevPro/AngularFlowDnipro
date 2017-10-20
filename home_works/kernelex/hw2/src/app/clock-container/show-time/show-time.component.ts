import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-show-time',
  template: `
    <div class="bg">
      <p [class.temp]="tempTime">Time: {{(tempTime ? tempTime : currentTime) | date:'mediumTime'}}</p>
      <button (click)="rememberHandler()">Remember</button>
    </div>

  `,
  styles: [`
    .bg {
      background-color: antiquewhite;
      padding: 10px;
    }
    .temp{
      color: magenta;
    }
  `]
})
export class ShowTimeComponent implements OnInit {
  @Input()
  public currentTime: Date;
  @Input()
  public tempTime: Date;

  @Output()
  public rememberTime: EventEmitter<Date> = new EventEmitter<Date>();

  rememberHandler(): void {
    this.rememberTime.emit(this.currentTime);
  }

  constructor() {
  }

  ngOnInit() {

  }

}
