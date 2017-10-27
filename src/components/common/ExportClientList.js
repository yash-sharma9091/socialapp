import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Http} from '../../lib/Http';

class ExportClientList extends Component {
	exportList() {
		const{id} = this.props;
		Http.post('export_client_list',{_id: id})
		.then(({data}) => console.log(data))
		.catch(error => console.log(error));
	}
	render() {
		const {className, text, componentClass} = this.props;
		return (
			<Button className={className} componentClass={componentClass} onClick={() => this.exportList()}>{text || 'Export'}</Button>
		);
	}	
}

export default ExportClientList;