type MonthType = number | string;

export function override(day: number, month: number, year: number):Date;
export function override(day: number, month: string, year: number):Date;
export function override(dateParams: DateParams[]):Date[];

export function override(day: number | DateParams[], month?: MonthType, year?: number):Date|Date[] {
    // SZ please use string tempaltes of single quotes for string declaration
    return typeof month === "string" 
        // SZ please make string concatination via string templates
        ? new Date(Date.parse(month + ' ' + day + ', ' + year))
        : Array.isArray(day)  
            // SZ arrow function should has return type
            ? day.map((x: DateParams) => override(x.day, x.month, x.year))
            : new Date(year, month - 1, day);
}



export class DateParams {
    // SZ missed access modifiers
    day: number; 
    month: number; 
    year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
