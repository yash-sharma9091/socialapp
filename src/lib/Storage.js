/* global _ */
export class Storage {
	static set(item, value) {
		localStorage.setItem(`socialProof.${item}`, JSON.stringify(value));
	}
	static get(item) {
		let _item = localStorage.getItem(`socialProof.${item}`);
		return !_.isEmpty(_item) ? JSON.parse(_item) : undefined;
	}
	static remove(item) {
		return localStorage.removeItem(`socialProof.${item}`);
	}
}