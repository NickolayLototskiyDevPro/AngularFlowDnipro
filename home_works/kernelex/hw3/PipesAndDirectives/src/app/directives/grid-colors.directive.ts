import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[gridColors]'
})
export class GridColorsDirective implements OnInit {
  @Input() thOddColor: string;
  @Input() thEvenColor: string;
  @Input() trOddColor: string;
  @Input() trEvenColor: string;
  @Input('gridColors') defaultColor: string;

  public element;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.highlightRows();
    this.highlightHeders();
  }

  private highlightRows() {
    let rows = this.element.getElementsByTagName('tr');
    console.log('rows.length', rows.length);
    console.log('rows', rows);
    for (let i = 0; i < rows.length; i++) {
      if (i % 2 === 0) {
        rows.item(i).style.backgroundColor = this.trEvenColor || '';
      }else{
        rows.item(i).style.backgroundColor = this.trOddColor || '';
      }
    }
  }

  private highlightHeders() {
    let ths = this.element.getElementsByTagName('th');
    console.log('rows.length', ths.length);
    console.log('rows', ths);
    for (let i = 0; i < ths.length; i++) {
      if (i % 2 === 0) {
        ths.item(i).style.backgroundColor = this.thEvenColor || '';
      }else{
        ths.item(i).style.backgroundColor = this.thOddColor || '';
      }
    }
  }

}
