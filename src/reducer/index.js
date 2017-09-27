import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authorize = (email, password) => ({
  type: AUTH_REQUEST,
  payload: { email, password }
});

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  alertVisible: false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return { ...state, token: payload };
    }
    case AUTH_FAILURE: {
      state.alertVisible = true;
      return { ...state, error: payload }
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  auth: authReducer,
  router: routerReducer,
  form: formReducer
});

export default reducer;