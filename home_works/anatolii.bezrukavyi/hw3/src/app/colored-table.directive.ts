import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[colored-table]',
})
export class ColoredTableDirective implements OnInit {
    @Input()
    public thOddColor: string;
    @Input()
    public thEvenColor: string;
    @Input()
    public trOddColor: string;
    @Input()
    public trEvenColor: string;

    private element: HTMLElement;
      constructor(el: ElementRef) {
        this.element = el.nativeElement;
      }

    private paint(elements: NodeListOf<HTMLElement>, evenColor: string, oddColor: string): void {
        Array.from(elements).forEach((th: HTMLElement, i: number): void => {
            th.style.backgroundColor = i % 2 === 0 ? oddColor : evenColor;
        });
    }

    ngOnInit(): void {
        this.paint(this.element.getElementsByTagName('th'), this.thEvenColor, this.thOddColor);
        this.paint(this.element.getElementsByTagName('tr'), this.trEvenColor, this.trOddColor);
    }
}
