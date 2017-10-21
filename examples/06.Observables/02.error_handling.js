var Rx = require('rx');

var rxObservable = Rx.Observable.of(1,2,3,4,5)
    .map(x => {
        if (x === 3){
            throw 'error occurred in observable';
        }

        return x;
    })
    //.catch(error => Rx.Observable.just('error occurred'))
    //.onErrorResumeNext(Rx.Observable.just('On resume next'))
    .catch(error => Rx.Observable.throw('stop'))

rxObservable.subscribe(
    x => console.log(x),
    err => console.error('error ----> ' + err),
    () => console.log('done')
);