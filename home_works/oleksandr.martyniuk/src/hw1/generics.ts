class Generics {
    static toString<T>(value: T): string {
        if (value === undefined) {
            return 'undefined';
        } else {
            return JSON.stringify(value);
        }
    }

    static valueOf<T>(value: T): boolean {
        return value === Object(value);
    }
}

console.log(Generics.toString(1));
console.log(Generics.toString({}));
console.log(Generics.toString(null));
console.log(Generics.toString(undefined));
console.log(Generics.toString({ 'key': 'value' }));
console.log(Generics.toString([{ 'key': 'value' }]));
console.log(Generics.toString(true));
console.log(Generics.toString(10));
console.log(Generics.toString("Bender"));

console.log(Generics.valueOf(1));
console.log(Generics.valueOf({}));
console.log(Generics.valueOf(null));
console.log(Generics.valueOf(undefined));
console.log(Generics.valueOf({ 'key': 'value' }));
console.log(Generics.valueOf([{ 'key': 'value' }]));
console.log(Generics.valueOf(true));
console.log(Generics.valueOf(10));
console.log(Generics.valueOf("Bender"));