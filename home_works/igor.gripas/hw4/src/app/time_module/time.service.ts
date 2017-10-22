import { EventEmitter } from '@angular/core';

export class TimeService {
  protected _currentTime: Date|number;
  protected _showTime: Date|number;
  public Time: EventEmitter<Date | number> = new EventEmitter();

  constructor(){};

  public get time():Date|number {
    return this._showTime ? this._showTime : this._currentTime;
  }

  public set time(time: Date|number) {
    this._showTime = time;
    setTimeout(()=> this._showTime = null, 5000);
  }
}
