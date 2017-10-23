import { element } from 'protractor';
import { Directive, ElementRef, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCustomRadiobutton]'
})
export class CustomRadiobuttonDirective implements OnInit, OnChanges {
  constructor(private el: ElementRef) { }

  @Input()
  public rbValues: Array<string>;
  @Input()
  private selectedValue: string;
  @Output()
  public selectionChanged: EventEmitter<string> = new EventEmitter();

  private currSelected: string;
  private element: HTMLElement;
  private radioMap: Map<string, HTMLInputElement>;
  private dataAttrName = 'radio-data';

  public ngOnInit(): void {
    if (!this.rbValues || this.rbValues.length === 0) {
      return;
    }
    this.element = this.el.nativeElement;
    this.init();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.rbValues) {
      this.init();
    }
    if (changes.selectedValue && changes.selectedValue.currentValue) {
      this.selectValue(this.selectedValue);
    }
  }

  private init() {
    if (!this.element) {
      return;
    }
    this.element.innerHTML = '';
    this.radioMap = new Map();
    this.rbValues.forEach((value: string): void => {
      const wrapper: HTMLElement = document.createElement('div');
      let input: HTMLInputElement = document.createElement('input');
      input.type = 'checkbox';
      input.setAttribute(this.dataAttrName, value);
      input.addEventListener('click', this.handleUpdate.bind(this));
      input = wrapper.appendChild(input);
      const label = document.createTextNode(value);
      wrapper.appendChild(label);
      this.element.appendChild(wrapper);

      this.radioMap.set(value, input);
    });

    this.selectValue(this.selectedValue);
  }

  public selectValue(value?: string): void {
    if (!this.radioMap) {
      return;
    }

    let handledValue: string;
    if (!value || !this.radioMap.get(value)) {
      handledValue = this.rbValues[0];
    } else {
      handledValue = value;
    }

    // check if value changed
    if (this.currSelected) {
      if (this.currSelected === handledValue) {
        return;
      }
      this.radioMap.get(this.currSelected).checked = false;
    }
    this.currSelected = handledValue;
    this.radioMap.get(this.currSelected).checked = true;
    this.selectionChanged.emit(this.currSelected);
  }

  private handleUpdate(e: MouseEvent): void {
    const t: HTMLInputElement = e.target as HTMLInputElement;
    const data = t.getAttribute(this.dataAttrName);
    this.selectValue(data);
  }
}
