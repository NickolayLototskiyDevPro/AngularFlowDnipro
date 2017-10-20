class ValueOf {
    static valueOf<T>(param: T): boolean {
        return param === Object(param);
    }
}

console.log(ValueOf.valueOf<number>(1));
console.log(ValueOf.valueOf<object>({}));
console.log(ValueOf.valueOf<string>('string'));
console.log(ValueOf.valueOf<[number]>([1, 2, 3]));
console.log(ValueOf.valueOf<null>(null));
console.log(ValueOf.valueOf<[string]>(['string','string']));
console.log(ValueOf.valueOf({}));
console.log(ValueOf.valueOf({param: 'string'}));
console.log(ValueOf.valueOf(undefined));
console.log(ValueOf.valueOf(false));


