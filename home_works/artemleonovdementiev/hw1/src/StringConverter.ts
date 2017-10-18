// Implementation of 3rd homework task
function stringConverter<T> (data: T): string {
    if (data.toString && data.toString().indexOf('[object') === -1) {
        return data.toString();
    } else {
        return typeof data === 'object'
        ? convertObjectToString(data)
        : `this type has no implementation for toString method - ${typeof data}`
    }
};

function convertObjectToString<T> (data: T): string {
    let concatedString: string = '';

    for (let key in data) {
        concatedString += `${key}: ${data[key]}; `
    }

    return concatedString;
}

console.log(stringConverter('simple string'));
console.log(stringConverter(1231));
console.log(stringConverter([1,2,45,23,66]));
console.log(stringConverter({
    firstField: 'first field',
    secondField: 1515151
}));
