import { TimeService } from "./time.service";

export class DateTimeService extends TimeService {
    constructor() {
        super();
        setInterval((): void => {
            this._currentTime = new Date();
            this.Time.emit(this.time);
        }, 1000);
    }
}
