import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
    selector: 'app-timecapsule',
    // SZ saveTime is not a function, did you mean savedTime?
    template: `
        <button (click)="saveTime()">Save Time</button>
        <button (click)="showSavedTime()">Show Time</button>
    `
})
export class TimeCapsuleComponent implements OnChanges {
    public storedTime: string = '00:00';

    @Input()
    public currentTime: string;

    public ngOnChanges(): void {
        this.storedTime = this.currentTime;
    }

    @Output()
    public showTime: EventEmitter<string> = new EventEmitter();
    public saveTime: EventEmitter<string> = new EventEmitter();

    public showSavedTime (): void {
        this.showTime.emit(this.storedTime);
    }

    public savedTime (): void {
        this.saveTime.emit(this.currentTime);
    }
}
