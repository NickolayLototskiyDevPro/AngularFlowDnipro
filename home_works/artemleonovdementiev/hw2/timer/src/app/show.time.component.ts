import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-showtime',
    template: `
        <span>{{time}}</span>
    `
})
export class ShowTimeComponent {

    @Input()
    public time: string;
}
