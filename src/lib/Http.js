/* global axios */
export class Http {
	static post(url, data) {
		return new Promise((resolve, reject) => {
			axios.post(url, data)
			.then(({data}) => {
				resolve({data: data.records });
			})
			.catch(error => {
				reject((error.response) ? error.response.data : error);
			});
		});
	}
}