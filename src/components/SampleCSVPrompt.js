import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';
import SampleCSV from '../images/sample.csv';
import Alert from './common/Alert';
import ImportClientList from './ImportClientList';
class SampleCSVPrompt extends Component {
	constructor() {
		super();
		this.toggleUploading = this.toggleUploading.bind(this);
		this.state = {
			isUploading: false,
			success: '',
			error:''
		};
	}
	toggleUploading(state) {
		this.setState(state);
	}
	render(){
		const {show, hideDialog, client} = this.props;
		const {isUploading, error, success} = this.state;
		return (
			<Modal show={show} onHide={hideDialog} className="scriptModal SampleModal">
				<Modal.Header closeButton>
					<Modal.Title>Import <strong>Client</strong> List</Modal.Title>
				</Modal.Header>	
				<Modal.Body >
					<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger" : "success"} />
					<div className="modal-body">
					  	<p className="styledText">You should download SampleCSV first and format your client list csv accordingly before import.</p>
					</div>
					<div className="modal-footer text-center">
						<div className="row">
							<div className="col-sm-6 text-left">
						  		<a href={SampleCSV} download="Sample.csv" className="btn grayfillbtn ">Download Sample CSV</a>
						  	</div>	
						  	<div className="col-sm-6 text-right">
						  		<div className="inputFile ">
						  			<button type="button" className="btn yellobtn" disabled={isUploading}>{isUploading ? 'Uploading ...' : 'Import Client List' }</button>
						  			<ImportClientList toggleUploading={this.toggleUploading} client={client}/>
						  		</div>
						  	</div>	
						</div>  
					</div>
				</Modal.Body>
			</Modal>		
		);
	}
}
// prop checks
SampleCSVPrompt.propTypes = {
  	show: PropTypes.bool.isRequired,
  	hideDialog: PropTypes.func.isRequired
}

export default SampleCSVPrompt;