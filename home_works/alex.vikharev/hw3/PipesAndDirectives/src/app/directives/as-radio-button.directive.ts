import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[asRadioButton]'
})
export class AsRadioButtonDirective {

  // SZ missed type
  public hostComponent;

  constructor(private el: ElementRef) {
    this.hostComponent = el.nativeElement;
  }


  @HostListener('click', ['$event.target'])
  // SZ missed access modifier
  onClick(clickElement) {
    console.log("onMouseClick", clickElement);
    // SZ you lost round breacket in the end of condition below
    if (clickElement.type === 'checkbox' {
      // SZ please don't use var use let or const instead
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
