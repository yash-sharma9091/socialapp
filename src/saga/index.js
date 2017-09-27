import { call, put, takeLatest } from 'redux-saga/effects';
import {login} from '../api/login';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../reducer';

function* authorize({ payload: { email, password } }) {
	try {
		const { token } = yield call(login, 'login', { email, password });
		yield put({ type: AUTH_SUCCESS, payload: token });
		localStorage.setItem('token', token);
	} catch (error) {
		yield put({ type: AUTH_FAILURE, payload: error.errors.message });
		localStorage.removeItem('token');
	}
}

function* Saga() {
	yield takeLatest(AUTH_REQUEST, authorize);
}

export default Saga;