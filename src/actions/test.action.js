export const actions = {
  ADD_COUNTER: 'ADD_COUNTER',
  MINUS_COUNTER: 'MINUS_COUNTER',
};

export const addCounter = () => async dispatch => {
  dispatch({ type: actions.ADD_COUNTER });
};

export const minusCounter = () => async dispatch => {
  dispatch({ type: actions.MINUS_COUNTER });
};
