import { TimeService } from "./time.service";

export class NumberTimeService extends TimeService {
    constructor() {
      super();
        this._currentTime = 0;
        setInterval((): void => {
            this._currentTime = <number>this._currentTime + 1;
            this.Time.emit(this.time);
        }, 1000);
    }
}
