import { actions } from '../actions/test.action';

const initialState = {
  counter: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case actions.MINUS_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export const selectCounter = state => state.counter;
