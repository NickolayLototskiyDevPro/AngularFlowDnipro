var Rx = require('rx');

var source1 = Rx.Observable.interval(100).take(7).map( x => 'source1 ' + x);
var source2 = Rx.Observable.interval(200).take(6).map( x => 'source2 ' + x);

var source3 = source1.merge(source2);
source3.subscribe(x => console.log('Source 3 -  '+ x.toString()));  

var source4 = Rx.Observable.interval(100).take(3).map( x => Rx.Observable.timer(500).map(()=> x + 1))
                .mergeAll();

source4.subscribe(x => console.log(x.toString()));  