const Rx = require('rx');

const source = Rx.Observable.create(observer => {
    const destFn = setTimeout(()=>{
        console.log('Timeout hit');
        observer.onNext('Hello world!');
        observer.onNext(2);
        observer.onNext('Hello!');
        observer.onNext({a:true, c:'Hello', d:7});
        observer.onCompleted();
    }, 3000);
    return () => clearTimeout(destFn);
});

const sub = source.subscribe( 
    value => {
        console.log('Observer 1');
        console.log('current value ' + JSON.stringify(value));
    }, 
    error  => {
        console.error(error);
    }, 
    () => {
        console.info('done')
    });

const sub1 = source.subscribe( 
    value => {
        console.log('Observer 2');
        console.log('current value ' + JSON.stringify(value));
    }, 
    error  => {
        console.error(error);
    }, 
    () => {
        console.info('done')
    });

setTimeout(()=>{ sub.dispose();}, 100);