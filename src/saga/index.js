import { takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_LOGOUT_REQUEST, FETCH_SITE_SETTINGS, PROFILE_UPDATE_REQUEST } from '../constant';
import { authorize, logout } from './auth';
import { fetchSiteSettings } from './settings';
import { updateUserProfile } from './user';

function* Saga() {
	yield takeLatest(AUTH_REQUEST, authorize);
	yield takeLatest(AUTH_LOGOUT_REQUEST, logout);
	yield takeLatest(FETCH_SITE_SETTINGS, fetchSiteSettings);
	yield takeLatest(PROFILE_UPDATE_REQUEST, updateUserProfile);
}

export default Saga;