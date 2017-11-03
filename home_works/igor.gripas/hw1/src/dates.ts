class MyDate {
    private _date:number;
    private _month:number|string;
    private _year:number;

    constructor(date:number, month:number|string, year:number) {
        this._date = date;
        this._month = month;
        this._year = year;
    };

    public get date():number {
        return this._date;
    }
    public get month():number|string {
        return this._month;
    }

    public get year():number {
        return this._year;
    }
}

function createDate(date:number, month:number|string, year:number):Date;
function createDate(dates:Array<MyDate>):Array<Date>;

function createDate(date:number|Array<MyDate>, month?:number|string, year?:number):Date|Array<Date> {
    if (typeof date === 'number') {
        return new Date(`${month} ${date}, ${year}`);
    }
    return date.map(date => {
        console.log('date', date.date, date.month, date.year);
        return createDate(date.date, date.month, date.year)
    })
}

console.log(createDate(25, 10, 1985));
console.log(createDate(1, 1, 2017));
console.log(createDate(25, "October", 1985));

console.log(createDate([new MyDate(25, "October", 1985), new MyDate(25, 10, 1985), new MyDate(1, "January", 1985)]));