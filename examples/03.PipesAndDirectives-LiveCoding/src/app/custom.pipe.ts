import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'custom'
})
export class CustomPipe implements PipeTransform {
    public transform(value: string, char: string): string {
        if (!value) {
            return value;
        }

        return char.repeat(value.length);
    }

}
