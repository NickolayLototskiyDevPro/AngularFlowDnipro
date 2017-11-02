import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-clock-container',
  template: `
  <div class='wrapper'>
  <div><h4>Clock container</h4></div>
  <app-show-time [currTime]="time" [isFrozen]="isFrozen" (onTimeRemembered)='rememberTime($event)'></app-show-time>
  </div>`,
  styles: [
    '.wrapper { background-color: #1098d0; color: white; width: 300px; display:flex; flex-flow:column; text-align: center;}',
  ]
})
export class ClockContainerComponent implements OnInit, OnChanges, OnDestroy {
  constructor() { }

  @Input()
  public timeToFreeze: Date;
  @Input()
  public freezeTimeout: number;

  private time: Date;
  private timerSubscription: Subscription;
  private timeout;
  private isFrozen: boolean = false;

  @Output()
  onTimeRemembered: EventEmitter<Date> = new EventEmitter();

  public ngOnInit(): void {
    this.timerSubscription = IntervalObservable.create(1000).subscribe(this.timeObserver);
    if (!this.freezeTimeout) {
      this.freezeTimeout = 5000;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timeToFreeze && changes.timeToFreeze.currentValue) {
      this.initTimeFreeze(changes.timeToFreeze.currentValue);
    }
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  public initTimeFreeze(value: Date): void {
    this.isFrozen = true;
    this.time = this.timeToFreeze;
    this.timeout = setTimeout(this.discardTimeFreeze.bind(this), this.freezeTimeout);
  }

  private discardTimeFreeze(): void {
    this.isFrozen = false;
  }

  private timeObserver: () => void = (): void => {
    if (!this.isFrozen) {
      this.time = new Date();
    }
  }

  public rememberTime(value: Date) {
    this.onTimeRemembered.emit(value);
  }
}
