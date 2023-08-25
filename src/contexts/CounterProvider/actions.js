import * as types from "./types";

export function incrementCounter(dispatch) {
  dispatch({ type: types.INCREMENT_COUNTER });
}

export function decrementCounter(dispatch) {
  dispatch({ type: types.DECREMENT_COUNTER });
}
