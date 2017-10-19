import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-time-capsule',
  templateUrl: './time-capsule.component.html'
})
export class TimeCapsuleComponent {

  @Input()
  public memoTime: number;

  @Output()
  public showTime: EventEmitter<number> = new EventEmitter<number>();

  rememberTimeEmit(): void {
      this.showTime.emit(this.memoTime);
  }

}
