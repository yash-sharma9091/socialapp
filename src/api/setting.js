/* global axios */
import {Http} from '../lib/Http';
export function setting() {
	return new Promise((resolve, reject) => {
		axios.all([Http.get('cmsLinks'), Http.get('settings')])
		.then(axios.spread((cmsLinks, settings) => {
			resolve({links: cmsLinks.data, settings: settings.data});
		}))
		.catch(error => reject(error));
	});
}