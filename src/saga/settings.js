import { call, put } from "redux-saga/effects";
import {setting} from '../api/setting';
import {  SITE_SETTINGS } from '../constant';

export function* fetchSiteSettings(action) {
	try {
	   	const {settings, links} = yield call(setting);
		yield put({ type: SITE_SETTINGS, settings, links });
	} catch (error) {
		const {errors} = error;
		console.log(errors);
	}
}
