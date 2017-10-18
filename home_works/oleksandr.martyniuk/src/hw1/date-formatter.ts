type num_str = number | string;
type dateTuple = [number, num_str, number];

class DateFormatter {
    static format(day: number, month: number, year: number): Date;
    static format(day: number, month: string, year: number): Date;
    static format(arr: Array<dateTuple>): Date[];

    static format(arg1: number| Array<dateTuple>, month?: num_str, year?: number): Date | Date[] {
        if(typeof arg1 === 'number'){
            return DateFormatter.formatSingle(arg1, month, year);
        } else {
            const arr: Date[] = [];
            arg1.map(v => arr.push(DateFormatter.formatSingle(v[0], v[1], v[2])));
            return arr;
        }
    }

    private static formatSingle(day: number, month: num_str, year: number): Date {
        let res: Date;
        if (typeof month === 'number') {
            res = new Date(year, month - 1, day);
        } else {
            const dateString: string = `${month} ${day}, ${year}`;
            res = new Date(dateString);
        }
        return res;
    }
}

let ext = DateFormatter.format(10, 10, 1990);
console.log(ext.toString());
ext = DateFormatter.format(10, 'oct', 1990);
console.log(ext.toString());
let extArr = DateFormatter.format([[10,10,1990],[10, 'oct', 1990]]);
console.log(extArr.toString());