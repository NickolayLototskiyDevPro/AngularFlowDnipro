import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {
  transform(value: string): string {
    console.log('impure pipe invoke');
    if (!value) {
        return value;
    }
    return `***${value}***`;
  }
}

@Pipe({
  name: 'pure',
  pure: true
})
export class PurePipe implements PipeTransform {
  transform(value: string): string {
    console.log('pure pipe invoke');
    if (!value) {
      return value;
    }
    return `***${value}***`;
  }
}
