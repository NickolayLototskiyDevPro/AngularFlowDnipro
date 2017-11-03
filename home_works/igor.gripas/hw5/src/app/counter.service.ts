import { createStore } from 'redux';
import counterReducer, {CounterState} from './counter.reducer';
import { EventEmitter } from '@angular/core';

const store = createStore(counterReducer);
export class CounterService {
  public Count: EventEmitter<CounterState> = new EventEmitter();

  constructor(){
    store.subscribe(() => {
      this.Count.emit(store.getState());
    })
  };

  public init() {
    setTimeout(()=>store.dispatch({ type: 'ON_READY'}), 2000);
  }

  public increment() {
    setTimeout(()=>store.dispatch({ type: 'INCREMENT'}), 1000);
  }

  public decrement() {
    setTimeout(()=>store.dispatch({ type: 'DECREMENT'}), 1000);
  }
}

