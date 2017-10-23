import { Directive, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: '[appColoredTable]' })
export class ColoredTableDirective implements OnInit, OnChanges {
    constructor(private el: ElementRef) {
    }

    // needed to provide unique class for style insertion
    private static counter: number = 0;

    @Input()
    public thColorOdd: string;
    @Input()
    public thColorEven: string;
    @Input()
    public trColorOdd: string;
    @Input()
    public trColorEven: string;
    private element: HTMLElement;
    private cssClass: string;
    private stylesElement: HTMLStyleElement;

    public ngOnInit(): void {
        this.element = this.el.nativeElement;
        this.cssClass = this.getClassName();
        this.element.classList.add(this.cssClass);
        this.injectStyles();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        // check if style element instantiated
        if (this.stylesElement) {
            this.updateStyles();
        }
    }

    private getClassName(): string {
        const id: number = ColoredTableDirective.counter++;
        return `app-ft-${id}`;
    }

    private injectStyles(): void {
        const styleElement = document.createElement('style');
        styleElement.setAttribute('table-class', this.cssClass);
        styleElement.innerHTML = this.getCSS();
        this.stylesElement = document.head.appendChild(styleElement);
    }

    private updateStyles() {
        if (!this.stylesElement) {
            this.injectStyles();
        } else {
            this.stylesElement.innerHTML = this.getCSS();
        }
    }

    private getCSS(): string {
        let css: string = ``;
        if (this.thColorEven) {
            css = css.concat(`.${this.cssClass} th:nth-child(even){
                background-color: ${this.thColorEven};
            }`);
        }
        if (this.thColorOdd) {
            css = css.concat(`.${this.cssClass} th:nth-child(odd){
                background-color: ${this.thColorOdd};
            }`);
        }
        if (this.trColorEven) {
            css = css.concat(`.${this.cssClass} tr:nth-child(even){
                background-color: ${this.trColorEven};
            }`);
        }
        if (this.trColorOdd) {
            css = css.concat(`.${this.cssClass} tr:nth-child(odd){
                background-color: ${this.trColorOdd};
            }`);
        }
        return css;
    }
}
