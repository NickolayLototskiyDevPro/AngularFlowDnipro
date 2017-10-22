import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {

  public transform(value: Array<number>, even: boolean = true): Array<number> {
    const filtered: Array<number> = value.filter((v): boolean => {
      const res: boolean = v % 2 === 0;
      return even ? res : !res;
    });
    return filtered;
  }
}
