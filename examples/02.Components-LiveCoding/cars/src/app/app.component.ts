import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
        <h1>Hello {{frameworkName}}</h1>
        <input type="text" [(ngModel)]="frameworkName" />
        <button (click)="changeFramework()">Click me</button>
        <hr />
        <div><span>{{carName1}}</span>
            <app-ford [carName]="carName1" (changeName)="changeName($event)"></app-ford></div>
        <hr />
        
        <div *ngIf="isShow"><span>{{carName2}}</span>
        <app-ford [carName]="carName2" (changeName)="changeName2($event)"></app-ford></div>
        <input type="checkbox" [(ngModel)]="isShow" />
    `,
    styles: [
        `
            h1 {
                color: magenta;
            }
        `
    ]
})
export class AppComponent {
    public isShow: boolean = true;
    public frameworkName: string = 'Angular';
    public carName1: string = 'ford';
    public carName2: string = 'toyota';

    public changeName(name: string): void {
        this.carName1 = name;
    }

    public changeName2(name: string): void {
        this.carName2 = name;
    }

    public changeFramework(): void {
        this.frameworkName = this.frameworkName === 'Angular' ? 'Vue' : 'Angular';
    }
}
