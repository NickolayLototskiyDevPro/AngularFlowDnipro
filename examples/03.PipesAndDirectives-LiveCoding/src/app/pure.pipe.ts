import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'impure',
    pure: false
})
export class ImpurePipe implements PipeTransform {
    transform(value: string): string {
        console.log('Impure pipe invoke');
        if (!value) {
            return value;
        }

        return `***${value}***`;
    }

}

@Pipe({
    name: 'pure'
})
export class PurePipe implements PipeTransform {
    transform(value: string): string {
        console.log('Pure pipe invoke');
        if (!value) {
            return value;
        }

        return `***${value}***`;
    }
}
