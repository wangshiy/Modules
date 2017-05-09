import { Action, combineReducers } from '@ngrx/store';

export const PICK_BERRY = 'PICK_BERRY';
export const PICK_APPLE = 'PICK_APPLE';
export const PICK_APPLES = 'PICK_APPLES';
export const EMPTY_CART = 'EMPTY_CART';

export interface IAppState {
  berryCounter: number;
  appleCounter: number;
}

export const berryCounter =
  (value: number = 0, action: Action) => {
    switch (action.type) {
      case PICK_BERRY:
        return value + 1;

      case EMPTY_CART:
        return 0;

      default:
        return value;
    }
  };

export const appleCounter = (value: number = 0, action: Action) => {
  switch (action.type) {
    // if you have to many apples, they spill and you lose them all
    case PICK_APPLE:
      const x = value + 1;
      return x > 10 ? 0 : x;

    case PICK_APPLES:
      const y = value + action.payload;
      return y > 10 ? 0 : y;

    case EMPTY_CART:
      return 0;

    default:
      return value;
  }
};

export function appReducer(state: IAppState, action: Action) {
  const reducer = combineReducers({
    berryCounter: berryCounter,
    appleCounter: appleCounter
  });
  return reducer(state, action);
}
