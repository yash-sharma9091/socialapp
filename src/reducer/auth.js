import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../constant';
const initialState = {
  	token: localStorage.getItem('socialProof.token'),
  	user: localStorage.getItem('socialProof.user') ? JSON.parse(localStorage.getItem('socialProof.user')) : localStorage.getItem('socialProof.user')
};

export const authReducer = (state = initialState, { type, payload, user }) => {
    switch (type) {
    	case AUTH_SUCCESS: {
      		return { ...state, token: payload, user };
    	}
    	case AUTH_FAILURE: {
      		return { ...state, error: payload }
    	}
    	case AUTH_LOGOUT: {
      		return { ...state, token: null, user: null }
    	}
    	default:
      		return state;
  	}
};