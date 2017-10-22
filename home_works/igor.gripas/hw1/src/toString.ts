
function getString<T>(val:T):string {
    return JSON.stringify(val);
}

console.log(getString(25));
console.log(getString(new Date(1, 1, 2017)));
console.log(getString({val: 'value', foo: 'bar'}));
