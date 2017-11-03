import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subscription } from 'rxjs/Subscription';
import { Injectable, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ClockService implements OnDestroy {
    constructor() {
        this.init();
    }

    public currentDate: Date;
    private timerSubscription: Subscription;
    private interval: IntervalObservable;
    public timeUpdated: EventEmitter<Date> = new EventEmitter();

    public init(): void {
        this.interval = new IntervalObservable(1000);
        this.initTimeUpdate();
    }

    public initTimeUpdate(): void {
        this.timerSubscription = this.interval.subscribe((): void => {
            this.setTime();
        });
    }

    public stopTimeUpdate(): void {
        this.timerSubscription.unsubscribe();
    }

    public setTime(date?: Date): void {
        this.currentDate = date ? date : new Date();
        this.timeUpdated.next(this.currentDate);
    }

    public ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }
}
