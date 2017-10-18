// Implementation of 1st and 2nd homework tasks
function dateConverter (year: number, month: number, day: number): Date;
function dateConverter (year: number, month: string, day: number): Date;
function dateConverter (year: [number[], (number |string)[]]): Array<Date>;

function dateConverter (year: number | [number[], (number |string)[]], month?: number | string, day?: number): Date | Array<Date> {
    if (typeof year === 'number') {
        return new Date(`${month}, ${day}, ${year}`);
    } else {
        let result: Array<Date> = [];

        year.forEach((date: number[] | (number | string)[], iterator: number): void => {
            result[iterator] = new Date(`${date[0]}, ${date[1]}, ${date[2]}`);
        });

        return result;
    }
}

console.log(dateConverter(1990, 10, 22));
console.log(dateConverter(1990, 'October', 22));
console.log(dateConverter([[1990, 10, 23], [1990, 'October', 23]]));
