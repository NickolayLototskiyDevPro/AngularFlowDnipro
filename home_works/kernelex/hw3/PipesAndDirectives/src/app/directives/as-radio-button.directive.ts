import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[asRadioButton]'
})
export class AsRadioButtonDirective {

  public hostComponent;

  constructor(private el: ElementRef) {
    this.hostComponent = el.nativeElement;
  }


  @HostListener('click', ['$event.target'])
  onClick(clickElement) {
    console.log("onMouseClick", clickElement);
    if (clickElement.type === 'checkbox' {
      var array = this.hostComponent.getElementsByTagName("input");
      for (var ii = 0; ii < array.length; ii++) {
        if (array[ii].type === "checkbox") {
          if (array[ii] !== clickElement) {
            array[ii].checked = false;
          }
        }
      }
    }
  }

}
