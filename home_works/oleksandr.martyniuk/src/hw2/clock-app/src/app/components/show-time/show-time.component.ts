import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-time',
  template: `<h4 [class.frozen]="isFrozen">
  {{displayValue}}
  </h4>
  <button (click)='rememberTime()'>Remember Time</button>`,
  styles: [
    ':host { background-color: #1976d2; color: white;}',
    '.frozen { color: #ff7070}'
  ]
})
export class ShowTimeComponent implements OnChanges {

  @Input()
  public currTime: Date;
  @Input()
  public isFrozen = false;

  public displayValue;

  // SZ missed access modifiers
  // fixed
  @Output()
  public onTimeRemembered: EventEmitter<Date> = new EventEmitter();

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.currTime && changes.currTime.currentValue) {
      this.displayValue = changes.currTime.currentValue.toTimeString();
    }
  }

  public rememberTime() {
    this.onTimeRemembered.emit(this.currTime);
  }
}
