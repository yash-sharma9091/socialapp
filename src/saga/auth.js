import { call, put } from 'redux-saga/effects';
import {login} from '../api/login';
import {  AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../constant';
//import {Storage} from '../lib/Storage';
import {Cookie} from '../lib/Cookie';

export function* authorize(action) {
	try {
	   	const { token, user } = yield call(login, 'login', action.user);
		yield put({ type: AUTH_SUCCESS, payload: token, user });
		
		Cookie.set('token', token, 1);
		Cookie.set('user', user, 1);
		if( action.user.remember_me ) {
			Cookie.set('rememberMe', {email: action.user.email, remember_me: true}, 7); // Remeber User email for 7 days
		} else {
			Cookie.delete('rememberMe');
		}
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		yield put({ type: AUTH_FAILURE, payload: errors.message });
		Cookie.delete('token');
		action.callbackError(errors.message);
	}
}

export function* logout(action) {
	Cookie.delete('token');
	Cookie.delete('user');
	yield put({ type: AUTH_LOGOUT });
	action.callbackSuccess();
}