import React, {Component} from 'react';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import {Modal, Button} from 'react-bootstrap';
import {Http} from '../lib/Http';

class ResetPasswordOTPDialog extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }
	render() {
		const { show, hide, error, handleSubmit, invalid, submitting, submitSucceeded} = this.props;
		return(
			<Modal show={show} onHide={hide}>
				<Form onSubmit={handleSubmit(this.formSubmit)}>
					<Modal.Header closeButton>
						<Modal.Title>Reset Password by OTP</Modal.Title>
					</Modal.Header>	
					<Modal.Body className="supporfom">
						<Alert alertVisible={error || (this.state.success && submitSucceeded)} alertMsg={error || this.state.success} className={error ? "danger" : "success"} />
						<Field 
							component={FormField} type="text" 
							name="verification_code" label="Verification Code" 
							placeholder="Verification Code" theme="custom" 
							className="input_both" doValidate={true}/>
						<Field 
							component={FormField} type="password" 
							name="password" label="New Password" 
							placeholder="New Password" theme="custom" 
							className="input_both" doValidate={true}/>
						<Field 
							component={FormField} type="password" 
							name="confirm_password" label="Confirm Password" 
							placeholder="Confirm Password" theme="custom" 
							className="input_both" doValidate={true}/>
					</Modal.Body>
					<Modal.Footer>
						<FormSubmit error={error} invalid={invalid} submitting={submitting} className="yellobtn pull-left" buttonSaveLoading="Processing..."/>
						<Button onClick={hide} className="grayfillbtn" >Close</Button>
					</Modal.Footer>
				</Form>	
			</Modal>
		);
	}
	formSubmit(values) {
		const { hide } = this.props;
		return new Promise((resolve, reject) => {
			Http.post(`reset_password/${values.verification_code}`, values)
			.then(({data}) => {
				setTimeout( () =>{
					this.setState({success: ''});
					hide();
				} ,1500);
				this.setState({success: data.message})
				resolve();
			})
			.catch(({errors}) => {
				reject(new SubmissionError({_error: errors.message}));
			});
		});
	}
}

const ResetPasswordOTPDialogForm = reduxForm({
  	form: 'reset_password',
  	validate: (values) => {
    	const errors = {};
    	if (!values.verification_code) {
        	errors.verification_code = 'Verification code is required';
      	}
    	if(!values.password) {
      		errors.password = 'New Password is required';
    	} else if( !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(values.password) ) {
    		errors.password = 'Password must be at least 8 characters long and should contain at least one digit, one lower case and one upper case character';
    	} else if( values.confirm_password && values.password !== values.confirm_password ) {
    		errors.password = 'New Password and Confirm password should match';
    	}
    	if (!values.confirm_password) {
        	errors.confirm_password = 'Confirm Password is required';
      	}
    	return errors;
  	}
})(ResetPasswordOTPDialog);

export default ResetPasswordOTPDialogForm;