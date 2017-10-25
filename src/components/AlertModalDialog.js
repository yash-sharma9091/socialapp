import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { push } from 'react-router-redux';

class AlertModalDialog extends Component {
	constructor(props) {
      	super(props);
      	this.state = {
      		show: false
      	}
    }
    componentWillMount() {
    	this.showDialog();
    }
    onExited() {
		const {dispatch, redirect} = this.props;
		if( redirect ) {
			dispatch(push(redirect));
		}
	}
	render() {
		let { alertMsg, title} = this.props;
		
		return(
			<Modal show={this.state.show} onHide={() => this.hideDialog()} onExited={() => this.onExited()}>
				<Modal.Header closeButton>
					<Modal.Title>{title || 'Confirmation ?'}</Modal.Title>
				</Modal.Header>	
				<Modal.Body className="supporfom">
					<h4 className="text-center pad-10">{alertMsg}</h4>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => this.hideDialog()} className="grayfillbtn" >Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
	hideDialog() {
		this.setState({show: false});
	}
	showDialog() {
		this.setState({show: true});
	}
}

export default AlertModalDialog;