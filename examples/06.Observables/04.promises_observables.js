var Rx = require('rx');

var promise = new Promise((resolve) => {
    console.log('Promise started');
    setTimeout(()=> {
        resolve(42);
    }, 500);
});

promise.then(x => console.log(x));

var source = Rx.Observable.create((observer) => {
    console.log('Observable started');
    var id = setTimeout(() => {
        observer.onNext(42);
    }, 500);

    return() => {
        clearTimeout(id);
        console.log('Observable instance destroyed');
    }
});

source.forEach(x => console.log(x));

var sub1 = source.subscribe((x)=>{
    console.log('current value sub1 ' + x);
}, function(error){
    console.error(error);
}, function(){
    console.info('done')
});

var sub2 = source.subscribe((x)=>{
    console.log('current value sub2 ' + x);
}, function(error){
    console.error(error);
}, function(){
    console.info('done')
});

sub1.dispose();