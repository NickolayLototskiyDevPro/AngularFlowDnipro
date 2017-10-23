import {TimeService} from "./time.service";
import {Injectable} from "@angular/core";

@Injectable()
export class TimeCapsuleService {
  private _time: Date | number;

  constructor(private _timeService: TimeService){
  };

  public rememberTime():void {
    this._time = this._timeService.time;
  }

  public showTime():void {
    this._timeService.time = this._time;
  }
}
