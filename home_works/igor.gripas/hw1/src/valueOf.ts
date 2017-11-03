

function valueOf<T>(val:T):boolean {
    return !!val;
}

console.log(valueOf(25));
console.log(valueOf(new Date(1, 1, 2017)));
console.log(valueOf(0));
console.log(valueOf(false));
console.log(valueOf('false'));
console.log(valueOf({val: 'value', foo: 'bar'}));
