import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { isEven } from './utils/numberUtils';

@Directive({
  selector: '[tableColor]',
})
export class TableColor implements OnInit {
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

  public ngOnInit(): void {
    this.setColors(this.element.getElementsByTagName("th"), this.thEvenColor, this.thOddColor);
    this.setColors(this.element.getElementsByTagName("tr"), this.trEvenColor, this.trOddColor);
  }

  private setColors(elements: NodeListOf<HTMLElement>, evenColor: string, oddColor: string): void {
    const elementsCount: number = elements.length;
    for (let i = 0; i < elementsCount; i++) {
      elements.item(i).style.backgroundColor = isEven(i + 1) ? evenColor : oddColor;
    }

  }

}
