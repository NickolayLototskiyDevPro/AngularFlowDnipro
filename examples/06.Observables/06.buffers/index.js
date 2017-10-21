var myButton = $('#clickMe');

var clicks = Rx.Observable.fromEvent(myButton, 'click');

//var delayedClicks = clicks;
var delayedClicks = clicks.flatMapFirst(x => Rx.Observable.timer(1000));

var bufferedClicks = clicks
                        .buffer(()=> delayedClicks)
                        .map(clickBuffer => clickBuffer.length)

bufferedClicks.subscribe(x => console.log(x));