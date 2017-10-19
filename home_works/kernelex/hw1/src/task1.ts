//- Create override method that can retrieve day, month(as number as text format) and year and return Date object
//Override this method for retrieve array of such parameters and retrieve array with dates.

type MyDate = [number, string | number, number];

function createDate(day: number, month: string | number, year: number): Date;
function createDate(array: Array<MyDate>): Array<Date> ;

function createDate(day: number | Array<MyDate>, month?: string | number, year?: number): Date | Array<Date> {
    if (typeof day === "number") {
        if (typeof month === "string") {
            return new Date(Date.parse(`${month} ${day}, ${year}`));
        }
        else if (typeof month === "number") {
            return new Date(year, month - 1, day);
        }
    }
    else {
        return (day as Array<MyDate>).map((value: MyDate): Date => createDate(value[0], value[1], value[2]));
    }
}

var date1: Date = createDate(1, 2, 2017);
console.log(date1.toDateString());

var date2: Date = createDate(11, "march", 2014);
console.log(date2.toDateString());

var dates: Array<Date> = createDate([[11, "march", 2014], [4, 6, 1999]]);
dates.forEach((date: Date) => console.log(date.toDateString()))