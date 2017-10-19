class ToString {
    static toString<T>(param: T): string {
        return JSON.stringify(param);
    }
}

console.log(ToString.toString<number>(1));
console.log(ToString.toString<string>('string'));
console.log(ToString.toString<[number]>([1, 2, 3]));
console.log(ToString.toString<[string]>(['string','string']));

console.log(ToString.toString({}));
console.log(ToString.toString({param: 'string'}));
console.log(ToString.toString(null));
console.log(ToString.toString(undefined));
console.log(ToString.toString(false));


