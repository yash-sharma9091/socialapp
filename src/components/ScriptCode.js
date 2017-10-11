import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';
const ScriptCode = ({show, hideDialog}) => {
	return (
		<Modal show={show} onHide={hideDialog} className="scriptModal">
			<Modal.Header closeButton>
				<Modal.Title>Script <strong>Code</strong></Modal.Title>
			</Modal.Header>	
			<Modal.Body >
				<div className="modal-body">
				  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
				</div>
				<div className="modal-footer text-center">
				  <button type="button" className="btn yellobtn">COPY CODE</button>
				</div>
			</Modal.Body>
		</Modal>		
	);
}

// prop checks
ScriptCode.propTypes = {
  	show: PropTypes.bool.isRequired,
  	hideDialog: PropTypes.func.isRequired
}

export default ScriptCode;