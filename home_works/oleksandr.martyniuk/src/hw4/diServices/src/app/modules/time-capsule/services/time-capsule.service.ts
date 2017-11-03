import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Injectable, EventEmitter } from '@angular/core';
import { ClockService } from '../../clock/services/clock.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class TimeCapsuleService {

    constructor(private clockService: ClockService) { }

    public savedTime: Date;
    public savedTimeUpdated: EventEmitter<Date> = new EventEmitter();

    public saveTime(value?: Date): Date {
        this.savedTime = value ? value : this.clockService.currentDate;
        this.savedTimeUpdated.next(this.savedTime);
        return this.savedTime;
    }

    public freezeTime(duration: number): Subscription {
        this.clockService.stopTimeUpdate();
        this.clockService.setTime(this.savedTime);
        return Observable.of(true).delay(duration).subscribe(() => {
            this.clockService.initTimeUpdate();
        });
    }
}
