import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';
const AddNewWebsite = ({show, hideDialog}) => {
	return (
		<Modal show={show} onHide={hideDialog} className="websiteModal">
			<Modal.Header closeButton>
				<Modal.Title>Add <strong>New Website</strong></Modal.Title>
			</Modal.Header>	
			<Modal.Body className="supporfom">
				<div className="form supporfom">
					<form>
						<div className="clearfix">  
							<div className="form-group group46 pull-left">
								<label htmlFor="Name">Name</label>
								<input type="text" className="form-control input_both" id="Name" placeholder="Name"/>
							</div>
							<div className="form-group group46 pull-right">
								<label htmlFor="Password">Website URL</label>
								<input type="text" className="form-control input_both" id="Password" placeholder="xyz@gmail.com"/>
							</div>
						</div>
						<div className="clearfix">  
							<div className="form-group group46 pull-left">
								<label htmlFor="Name">Select Plan</label>
								<select className="form-control input_both" placeholder="Select Plan">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
							</div>
						</div>
						<div className="form-group margin-bot10">
							<button type="button" className="btn btn-default yellobtn">SUBSCRIBE NOW</button>
						</div> 
					</form>
	            </div>
			</Modal.Body>
		</Modal>		
	);
}

// prop checks
AddNewWebsite.propTypes = {
  	show: PropTypes.bool.isRequired,
  	hideDialog: PropTypes.func.isRequired
}

export default AddNewWebsite;