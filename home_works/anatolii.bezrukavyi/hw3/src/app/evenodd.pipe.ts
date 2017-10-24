import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'evenOdd'
})

export class EvenOddPipe implements PipeTransform {
    public transform(value: number[], isEven: boolean = false): number[] {
        if (!value) {
            return value;
        }
        return value.filter((x:number, i:number): boolean => i % 2 === (isEven ? 1 : 0));
    }

}