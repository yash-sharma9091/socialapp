/* global axios */
export class Http {
	static post(url, data, config = null) {
		return new Promise((resolve, reject) => {
			axios.post(url, data, config)
			.then(({data}) => {
				resolve({data: data.records });
			})
			.catch(error => {
				reject((error.response) ? error.response.data : error);
			});
		});
	}
	static get(url) {
		return new Promise((resolve, reject) => {
			axios.get(url)
			.then(({data}) => {
				resolve({data: data.records });
			})
			.catch(error => {
				reject((error.response) ? error.response.data : error);
			});
		});
	}
}