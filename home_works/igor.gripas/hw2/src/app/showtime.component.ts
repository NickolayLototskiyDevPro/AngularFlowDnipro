import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-show-time',
    template: `
      <div>
        <div>time: {{time}}</div>
        <button (click)="rememberTimeEmit()">Remember time</button>
      </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowTime {
  @Input()
  public time: Date;
  @Output()
  public rememberTime: EventEmitter<Date> = new EventEmitter();

  public rememberTimeEmit(): void {
    this.rememberTime.emit(this.time);
  }

}
