import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
    selector: 'app-clock',
    template: `
        <app-showtime [time]="time"></app-showtime>
    `
})
export class ClockContainerComponent implements OnInit, OnDestroy, OnChanges {
    private startTime (): void {
        setInterval(this.setTime.bind(this), 1000);
    }

    private timeToStringConverter (value: number): string {
        let timeString: string = value.toString();

        if (timeString.length === 1) {
            timeString = `0${timeString}`
        }

        return timeString;
    }

    private stopTime (): void {
        clearInterval(this.setTime.bind(this));
    }

    private setTime (): void {
        let time: Date = new Date(),
            hours: string = this.timeToStringConverter(time.getHours()),
            minutes: string = this.timeToStringConverter(time.getMinutes());

            this.time = `${hours}:${minutes}`
            console.log(this.time);
    }

    public time: string = '';
    public showSavedTime(): void {
        this.stopTime();
        this.time = this.savedTime;
        setTimeout(this.startTime.bind(this), 10000);
    };

    @Input()
    public savedTime: string;

    public ngOnInit(): void {
        console.log('Init!');
        this.startTime();
    }
    public ngOnChanges(): void {
        this.showSavedTime();
    }
    public ngOnDestroy(): void {
        console.log('Destroyed!');
        this.stopTime();
    }

    @Output()
    public currentTime: EventEmitter<string> = new EventEmitter();

    public getCurrentTime (): void {
        this.currentTime.emit(this.time);
    }
}
