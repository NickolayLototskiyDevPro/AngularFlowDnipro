import { Pipe, PipeTransform } from '@angular/core';

const MORSE_CHARS = {
  'A': '*-',
  'B': '-***',
  'C': '-*-*',
  'D': '-**',
  'E': '*',
  'F': '**-*',
  'G': '--*',
  'H': '****',
  'I': '**',
  'J': '*---',
  'K': '-*-',
  'L': '*-**',
  'M': '--',
  'N': '-*',
  'O': '---',
  'P': '*--*',
  'Q': '--*-',
  'R': '*-*',
  'S': '***',
  'T': '-',
  'U': '**-',
  'V': '***-',
  'W': '*--',
  'X': '-**-',
  'Y': '-*--',
  'Z': '--**',
  '1': '*----',
  '2': '**---',
  '3': '***--',
  '4': '****-',
  '5': '*****',
  '6': '-****',
  '7': '--***',
  '8': '---**',
  '9': '----*',
  '0': '-----'
};

@Pipe({
  name: 'morse',
})
export class MorsePipe implements PipeTransform {
  public transform(value: string): string {
    if (!value) {
      return value;
    }

    return value.split('').reduce((res, char) => `${res}${MORSE_CHARS[char.toUpperCase()]}`, '');
  }

}
