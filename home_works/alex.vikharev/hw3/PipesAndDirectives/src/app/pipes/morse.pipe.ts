import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  // SZ please use Map<string, string> instead of useing plain object
  // SZ or define type for this purpose
  private alphabet = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
    'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
    'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
    'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----',
  };

  // SZ missed access modifier
  // SZ please setup tslint
  transform(value: string): string {
    // SZ missed return type of arrow function
    // SZ missed type of argument
    return value.split('').map((letter) => {
      return this.alphabet[letter.toLowerCase()] || "*";
    }).join('  ');
  }


}
