import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TimeCapsuleService {
  private time: Date;
  public rememberedTime$: EventEmitter<Date> = new EventEmitter();

  constructor() {
  }

  public setTime(date: Date): void {
    this.time = date;
    this.rememberedTime$.emit(this.time);
  }

}
