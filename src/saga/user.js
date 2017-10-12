import { call, put } from "redux-saga/effects";
import {updateProfile} from '../api/user';
import {  PROFILE_UPDATE } from '../constant';

export function* updateUserProfile(action) {
	try {
	   	let {user} = yield call(updateProfile, action.user);
		yield put({ type: PROFILE_UPDATE, user });
		localStorage.setItem('socialProof.user', JSON.stringify(user));
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		action.callbackError(errors.message);
	}
}
