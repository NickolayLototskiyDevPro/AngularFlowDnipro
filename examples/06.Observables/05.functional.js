var Rx = require('rx');

var source = [0,1,2,3,4,5,6,7];

var result = source
    .filter( x => x % 2 === 0)
    .map(x => x + '-')
    .reduce((r, x) => {
        return r + x;
    }, '');

console.log(result);

var stream = Rx.Observable.from(source)
                .flatMap(x => Rx.Observable.timer(1000).map(y => x));

stream
    .filter( x => {
        //console.log('filtering ' + x);
        return x % 2 === 0;
    })
    .map(x => {
       //console.log('mapping ' + x);
       return x + '-';  
    })
    .reduce((r, x) => {
        //console.log('reducing ' + x);
        return r + x;
    }, '')
    .subscribe(x => console.log(x));