import { actions } from './actions';

const initialState = {
  isLoggedIn: false,
  user: {},
  loading: {},
  error: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_BEGIN:
      return { ...state, loading: true };
    case actions.LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
export default reducer;

export const selectIsLoggedIn = state => state.isLoggedIn;
export const selectLoading = state => state.loading;
export const selectError = state => state.error;
