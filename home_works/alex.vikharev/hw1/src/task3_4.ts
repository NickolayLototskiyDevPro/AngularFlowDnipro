//- Implements to string method. Retrieve different type of object returns string
function toStr<T>(par:T):String{
    return par.toString();
}

console.log('-----toStr:-----');
console.log("date", toStr(new Date()));
console.log("num", toStr(123));
console.log("obj", toStr({a:1, b:'test'}));


//- Implements valueOf method. Retrieve different type of objects returns true/false.
function valueOf<T>(par:T):Boolean{
    return !!par;
}

console.log('-----valueOf:-----');
console.log("String", valueOf("String"));
console.log("date", valueOf(new Date()));
console.log("num", valueOf(123));
console.log("obj", valueOf({a:1, b:'test'}));
console.log("null", valueOf(null));

