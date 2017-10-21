import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[switchOnOff]',
})
export class SwitchOnOff implements OnInit {
  private element: HTMLElement;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  public ngOnInit(): void {
  }
}
