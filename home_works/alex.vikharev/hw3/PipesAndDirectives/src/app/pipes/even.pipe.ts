import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'even'
})

/**
 *  Implements pipe for filtering numbers.
 *  If you path true(default) pass even numbers from array only.
 *  If you path false odd.
 */
export class EvenPipe implements PipeTransform {

  // you transform your array to string, so return type of function will be a string
  // SZ please use :string instead of :any
  transform(value: Array<number>, even: boolean = true): any {
    if (!value) {
      return value;
    }


    return value.filter((item) => {
        return ( even ? item % 2 : !(item % 2));
      }
    ).join(',');

  }

}
