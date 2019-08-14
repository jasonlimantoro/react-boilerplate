import { combineReducers } from 'redux';
// Reducers
import { reducer as recruiters } from 'modules/recruiters';
import test, * as fromTest from './test.reducer';

export default combineReducers({ test, recruiters });

export const selectors = {
  test: {
    selectCounter: state => fromTest.selectCounter(state.test),
  },
};
