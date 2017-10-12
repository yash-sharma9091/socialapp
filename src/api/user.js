import {Http} from '../lib/Http';

export function updateProfile(values) {
	return new Promise((resolve, reject) => {
		let formData = new FormData();
		formData.append('customer_name', values.customer_name);
		formData.append('customer_url', values.customer_url);
		formData.append('email', values.email);
		if( values.image ) {
			formData.append('profile_image', values.image);	
		}
		formData.append('mobile', values.mobile);
		const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        Http.post('profile', formData, config)
        .then(({data}) => resolve({user: data}))
        .catch(error => reject(error));
	});
}