import { Component } from '@angular/core';

@Component({
    selector: 'app-my-component',
    template: `
        <h1>Hello Angular</h1>
        <app-life *ngIf="isShow" [textVal]='info'></app-life>
        <input type="text" [(ngModel)]="info" />
        <button (click)='toggleShow()'>Show</button>
        <h2>{{outputValue}}</h2>
        <app-child [name]="info" (inputVal)="handleValue($event)"></app-child>
    `
})
export class MyComponent {
    public isShow = true;
    public info = 'parent value';
    public outputValue = '';

    public toggleShow(): void {
        this.isShow = !this.isShow;
    }

    public handleValue(str: string): void {
        this.outputValue = str;
    }
}
