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
export class ShowTimeComponent implements OnInit, OnChanges {

  constructor() { }

  @Input()
  public currTime: Date;

  @Input()
  public isFrozen = false;

  public displayValue;
  

  @Output()
  onTimeRemembered: EventEmitter<Date> = new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currTime && changes.currTime.currentValue) {
      this.displayValue = changes.currTime.currentValue.toTimeString();
    }
  }

  public rememberTime() {
    this.onTimeRemembered.emit(this.currTime);
  }
}
