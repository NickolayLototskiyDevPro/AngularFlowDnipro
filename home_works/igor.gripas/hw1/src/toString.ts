
function getString<T>(val:T):string {
    if (!val) {
        return '';
    }
    if (typeof val === 'object') {
        return JSON.stringify(val);
    }
    if (val.toString) {
        return val.toString();
    }
    return JSON.stringify(val);
}

console.log(getString(25));
console.log(getString(new Date(1, 1, 2017)));
console.log(getString({val: 'value', foo: 'bar'}));
