import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-capsule',
  template: `
  <div>
  <button (click)="emitRemembered()">Emit remembered</button>
  <br/>
  <h4>Remembered value: {{displayedValue}}</h4>
  <div>`,
  styles: [
    ':host{ text-align: center;}'
  ]
})
export class TimeCapsuleComponent implements OnInit, OnChanges {
  constructor() { }

  @Input()
  private remembered: Date = null;
  private displayedValue: string;

  @Output()
  public emitted: EventEmitter<Date> = new EventEmitter();

  public emitRemembered(): void {
    if (this.remembered) {
      this.emitted.emit(this.remembered);
    }
  }

  // SZ missed access modifier
  public ngOnInit(): void {
    this.displayedValue = 'N/A';
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.remembered.currentValue) {
      this.displayedValue = changes.remembered.currentValue.toTimeString();
    }
  }
}
