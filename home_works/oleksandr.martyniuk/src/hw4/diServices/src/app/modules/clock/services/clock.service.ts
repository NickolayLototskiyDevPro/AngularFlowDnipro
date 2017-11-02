import { Subscription } from 'rxjs/Subscription';
import { Injectable, OnInit, OnDestroy } from '@angular/core';

@Injectable()
export class ClockService implements OnInit, OnDestroy {
    constructor() { }

    private time: Date;
    private timerSubscription: Subscription;
    private timeout;

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}
