import { call, put, takeLatest } from 'redux-saga/effects';
import {login} from '../api/login';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../reducer';

function* authorize(action) {
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

function* Saga() {
	yield takeLatest(AUTH_REQUEST, authorize);
}

export default Saga;