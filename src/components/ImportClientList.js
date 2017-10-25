import React, {Component} from 'react';
import {Http} from '../lib/Http';
import {connect} from 'react-redux';

class ImportClientList extends Component {
	handleOnChange(e) {
		const { user, client, toggleUploading } = this.props;
		toggleUploading({isUploading: true});
		let formData = new FormData();
		formData.append('client_file', e.target.files[0]);	
		formData.append('_id', user._id);	
		formData.append('subscription_id', client._id);	
		const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
		Http.post('import_client_list', formData, config)
		.then(({data}) => toggleUploading({isUploading: false, success: data.message}))
		.catch(({errors}) => toggleUploading({isUploading: false, error: errors.message}))
		.then(() => setTimeout(() => toggleUploading({isUploading: false, success: '', error: ''}),2500));
	}
	render() {
		
		return (
	        <input type="file" onChange={(e) => this.handleOnChange(e)}  />
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(ImportClientList);