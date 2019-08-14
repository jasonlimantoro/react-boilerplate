import RecruiterService from './service';

export const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};
const defaultService = new RecruiterService();

export const login = ({
  service = defaultService,
  auth,
} = {}) => async dispatch => {
  // eslint-disable-next-line camelcase
  const { id_token } = auth.tokenObj;
  localStorage.setItem('id_token', id_token);
  dispatch({ type: actions.LOGIN_BEGIN });
  try {
    const res = await service.login(auth);
    dispatch({ type: actions.LOGIN_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: actions.LOGIN_FAILURE, payload: e });
  }
};
