import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[itemHighlight]'
})
export class ItemHighlightDirective {

  @Input('itemHighlight') highlightColor: string ;

  constructor(private el: ElementRef) {
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.highlight('');
  }

}

