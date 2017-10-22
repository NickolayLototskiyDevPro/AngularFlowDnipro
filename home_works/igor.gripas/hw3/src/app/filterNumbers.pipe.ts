import { Pipe, PipeTransform } from '@angular/core';
import { isEven } from './utils/numberUtils';

@Pipe({
  name: 'filterNumbers',
})
export class FilterNumbersPipe implements PipeTransform {
  public transform(value: number[], even: boolean = true): number[] {
    if (!value) {
      return value;
    }
    const filterFunc = even ? num => isEven(num) : num => !isEven(num);
    return value.filter(filterFunc);
  }

}
