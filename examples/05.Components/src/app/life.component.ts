import { Component, OnInit, OnDestroy, OnChanges, DoCheck, SimpleChanges, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-life',
    template: `
        <h1>Life component</h1>
        <input type="text" [(ngModel)]='textVal' />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
    @Input()
    public textVal: string;

    ngDoCheck(): void {
        console.log('Checked!!!!');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`Was ${changes['textVal'].previousValue}`);
        console.log(`Is ${changes['textVal'].currentValue}`);
    }
    ngOnDestroy(): void {
        console.log('Component destroyed');
    }

    public ngOnInit(): void {
        console.log('Im alive');
    }

}
