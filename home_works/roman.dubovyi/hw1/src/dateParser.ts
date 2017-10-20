function dateParse(day: number, month: number | string, year: number): Date;
function dateParse(dates: [number, number | string, number][]): Date[];
function dateParse(...params: any[]): any {
    function getDate(args: any[]) {
        if (typeof args[1] === 'string') {
            return new Date(`${args[1]} ${args[0]}, ${args[2]}`);
        } else {
            return new Date(args[2], args[1], args[0]);
        }
    }

    if (Array.isArray(params[0])) {
        return params[0].map(function (date) {
            return getDate(date);
        });
    }

    return getDate(params);
}
console.log(dateParse(19, 8, 1991));
console.log(dateParse(19, 'September', 1991));
console.log(dateParse([[19, 8, 1991], [19, 'September', 1991]]));
