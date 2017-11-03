import {ACTIVATE, DECREMENT, INCREMENT} from "../actions";

export interface IAppState {
  readonly counter: number;
  readonly isActive: boolean;
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
      return {...state, counter: state.counter - 1};
    case ACTIVATE:
      return {...state, isActive: true};
  }
  return state;
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  isActive: false
}
