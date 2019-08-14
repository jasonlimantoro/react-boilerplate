import { combineReducers } from 'redux';
// Reducers
import { reducer as test, selectors as fromTest } from 'modules/counter';

export default combineReducers({ test });

export const selectors = {
  test: {
    selectCounter: state => fromTest.selectCounter(state.test),
  },
};
