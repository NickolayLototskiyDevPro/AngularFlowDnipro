import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'morse'
})

export class MorsePipe implements PipeTransform {
    private morseDict: Map<string, string> = 
        new Map([["0","-----"],["1",".----"],["2","..---"],["3","...--"],["4","....-"],["5","....."],["6","-...."],["7","--..."],["8","---.."],["9","----."],["a",".-"],["b","-..."],["c","-.-."],["d","-.."],["e","."],["f","..-."],["g","--."],["h","...."],["i",".."],["j",".---"],["k","-.-"],["l",".-.."],["m","--"],["n","-."],["o","---"],["p",".--."],["q","--.-"],["r",".-."],["s","..."],["t","-"],["u","..-"],["v","...-"],["w",".--"],["x","-..-"],["y","-.--"],["z","--.."],[" ","/"],["!","-·-·--"],[".","·-·-·-"],[",","--··--"]]);

    public transform(value: string): string {
        if (!value) {
            return value;
        }
        return value.split('').map(x => this.morseDict.get(x)).join('    ');
    }

}