import { EventEmitter } from '@angular/core';

export class TestService {
    private _counter: number;
    public Counter: EventEmitter<number> = new EventEmitter();

    constructor() {
        this._counter = Math.round(Math.random() * 100);
        setInterval((): void => {
            this._counter += 1;
            this.Counter.emit(this._counter);
          }, 1000);
    }
}
