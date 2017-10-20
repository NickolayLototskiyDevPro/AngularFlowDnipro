

function toString<T>(val:T):string {
    if (!val) {
        return '';
    }
    if (typeof val === 'object') {
        return JSON.stringify(val);
    }
    return val.toString();
}

console.log(toString(25));
console.log(toString(new Date(1, 1, 2017)));
console.log(toString({val: 'value', foo: 'bar'}));
