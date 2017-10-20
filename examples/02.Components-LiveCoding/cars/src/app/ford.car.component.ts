import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-ford',
    template: `
        <h2>This is {{carName}} car</h2>
        <input type="text" [(ngModel)]="carName" (input)='changeNameEmit()'/>
        <h4>{{carModel}} model</h4>
        <input type="text" #mod (input)="carModel = mod.value" />
    `
})
export class FordCarComponent implements OnInit {
    @Input()
    public carName: string;

    @Output()
    public changeName: EventEmitter<string> = new EventEmitter();

    public carModel: string;

    public changeNameEmit(): void {
        this.changeName.emit(this.carName);
    }

    ngOnInit(): void {
        console.log('Init!');
    }

}
