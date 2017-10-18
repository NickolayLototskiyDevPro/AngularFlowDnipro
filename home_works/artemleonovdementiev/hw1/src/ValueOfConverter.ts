// Implementation of 4th homework task
function valueOf<T> (data: T): Boolean {
    return !!data;
}

console.log(valueOf('simple string'));
console.log(valueOf(1231));
console.log(valueOf([1,2,45,23,66]));
console.log(valueOf({
    firstField: 'first field',
    secondField: 1515151
}));
console.log(valueOf(undefined));
console.log(valueOf(null));
