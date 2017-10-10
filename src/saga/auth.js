import { call, put } from 'redux-saga/effects';
import {login} from '../api/login';
import {  AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../constant';

export function* authorize(action) {
	try {
	   	const { token, user } = yield call(login, 'login', action.user);
		yield put({ type: AUTH_SUCCESS, payload: token, user });
		localStorage.setItem('socialProof.token', token);
		localStorage.setItem('socialProof.user', JSON.stringify(user));
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		yield put({ type: AUTH_FAILURE, payload: errors.message });
		localStorage.removeItem('token');
		action.callbackError(errors.message);
	}
}

export function* logout(action) {
	localStorage.removeItem('socialProof.token');
	localStorage.removeItem('socialProof.user');
	yield put({ type: AUTH_LOGOUT });
	action.callbackSuccess();
}