import {Directive, ElementRef, OnInit, OnDestroy} from '@angular/core';

@Directive({
  selector: '[switchOnOff]',
})
export class SwitchOnOff implements OnInit, OnDestroy {
  private element: HTMLElement;
  private inputs: NodeListOf<HTMLInputElement>;
  private listeners: (()=>void)[] = [];

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  public ngOnInit(): void {
    this.inputs = this.element.getElementsByTagName("input");
    this.forEachInput((input, index) => {
      const listener: () => void = () => this.setChecked(index);
      this.listeners.push(listener);
      input.addEventListener('click', listener);
    });
  }

  public ngOnDestroy(): void {
    this.forEachInput((item, idx) => {
      this.inputs.item(idx).removeEventListener('click', this.listeners[idx]);
    });
  }

  private setChecked(index: number):void {
    this.forEachInput(item => item.checked = false);
    this.inputs.item(index).checked = true;
  }

  private forEachInput(call: (HTMLInputElement, index) => void ) {
    const inputsCount: number = this.inputs.length;
    for (let i = 0; i < inputsCount; i++) {
      call(this.inputs.item(i), i);
    }
  }
}
