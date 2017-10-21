var Rx = require('rx');

var clock = Rx.Observable.interval(1000).take(6).map(x => x + 1).startWith(0)
        .publish()
        .refCount();

//console.log('connect');
//clock.connect();

//console.log('a subscribed');
//var subA = clock.subscribe(i => console.log('A ' + i));

setTimeout(()=>{
    console.log('b subscribed');
    clock.subscribe(i => console.log('B ' + i));
}, 3500);

setTimeout(()=>{
    //console.log('connect');
    var subA = clock.subscribe(i => console.log('A ' + i));
    //clock.connect();
}, 5000);

