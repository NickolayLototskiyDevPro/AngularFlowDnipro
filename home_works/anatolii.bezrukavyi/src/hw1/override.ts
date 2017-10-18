type MonthType = number | string;

export function override(day: number, month: number, year: number):Date;
export function override(day: number, month: string, year: number):Date;
export function override(dateParams: DateParams[]):Date[];

export function override(day: number | DateParams[], month?: MonthType, year?: number):Date|Date[] {
    return typeof month === "string" 
        ? new Date(Date.parse(month + ' ' + day + ', ' + year))
        : Array.isArray(day)  
            ? day.map((x: DateParams) => override(x.day, x.month, x.year))
            : new Date(year, month - 1, day);
}



export class DateParams {
    day: number; 
    month: number; 
    year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
