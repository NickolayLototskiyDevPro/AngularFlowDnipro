import { Directive , ElementRef, Input, OnInit, HostListener} from '@angular/core';

@Directive({
    selector: '[appColor]'
})
export class CustomDirective implements OnInit {
    @Input()
    public color: string;

    private element: HTMLElement;

    constructor (el: ElementRef) {
        this.element = el.nativeElement;
    }

    public ngOnInit(): void {
    }

    @HostListener('mouseenter')
    public changeColor(): void {
        this.element.style.backgroundColor = this.color;
    }

    @HostListener('mouseleave')
    public changeColorBack(): void {
        this.element.style.backgroundColor = '';
    }
}
