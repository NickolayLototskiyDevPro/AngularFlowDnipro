var Rx = require('rx');

var rxObservable = Rx.Observable
    .interval(500)
    .map(x => {
        if (x === 3){
            throw 'bad error';
        }

        return x;
    })
    //.retry(4)
    .retryWhen( err => {
        return err.scan((errCount, err) => {
            
            if(errCount >= 2){
                throw err;
            }
            return errCount + 1;
    }, 0)
    .delay(1000)});
    
rxObservable.subscribe(
    x => console.log(x),
    err => console.error(err),
    () => console.log('done')
);