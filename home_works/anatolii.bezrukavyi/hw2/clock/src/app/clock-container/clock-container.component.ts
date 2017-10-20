import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock-container',
  templateUrl: './clock-container.component.html'
})
export class ClockContainerComponent implements OnInit, OnDestroy {
  private intervalInstance: NodeJS.Timer;
  private currentTime: number = 0;

  ngOnDestroy(): void {
    clearInterval(this.intervalInstance);
  }
  
  @Input()
  public tickPeriod: number = 1000;
  @Input()
  public temporaryTime: number = 0;
  @Output()
  public rememberTime: EventEmitter<number> = new EventEmitter();

  public rememberTimeClicked(): void {
    this.rememberTime.emit(this.currentTime);
  }

  ngOnInit() {
    this.intervalInstance = setInterval(():void => {
      this.currentTime++;
    }, this.tickPeriod)
  }

}
