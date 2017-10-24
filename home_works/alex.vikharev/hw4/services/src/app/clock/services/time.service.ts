import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TimeService {

  public time$: EventEmitter<Date> = new EventEmitter();

  private tempTime: Date;

  constructor() {
  }

  public startTimer(): void {
    setInterval(() => {
        this.time$.next(this.tempTime || new Date());
      }
      , 300);
  }


  restoreTime(currentTime: Date) {
    setTimeout(() => {
        this.tempTime = null;
      }
      , 3000);
    this.tempTime = currentTime;
  }
}
