export class CounterState {
  private _count:number;
  private _isReady:boolean;

  constructor(count:number, isReady: boolean){
    this._count = count;
    this._isReady = isReady;
  }

  get count(): number {
    return this._count;
  }

  get isReady(): boolean {
    return this._isReady;
  }
}
const defaultState = new CounterState(0, false);

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      if (!state.isReady) {
        return state;
      }
      return new CounterState(state.count + 1, state.isReady);
    case 'DECREMENT':
      if (!state.isReady) {
        return state;
      }
      return new CounterState(state.count - 1, state.isReady);
    case 'ON_READY':
      return new CounterState(state.count, true);
    default:
      return state;
  }

}
