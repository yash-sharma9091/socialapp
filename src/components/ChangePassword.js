import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import FormField from "./common/FormField";
import Alert from './common/Alert';
import { Field,reduxForm, SubmissionError } from 'redux-form';
import FormSubmit from "./common/FormSubmit";
import {Http} from '../lib/Http';
import PropTypes from 'prop-types';

class ChangePassword extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	};
    }
	render() {
		const { error, handleSubmit, invalid, submitting, submitSucceeded} = this.props,
		{ success } = this.state;
		return (
			<div className="right_dash pull-right">
			    <div className="set_hd_inner">Change Password</div>
			    <div className="form_dash supporfom">
			        <Form onSubmit={handleSubmit(this.formSubmit)}>
			        	<Alert alertVisible={error || (success && submitSucceeded)} alertMsg={error || success} className={error ? "danger" : "success"} />
			            <Field 
			            	component={FormField} type="password" 
			            	name="password" label="Current Password"
			            	placeholder="Current Password" theme="custom" 
			            	className="input_both" doValidate={true}/>
			            <Field 
			            	component={FormField} type="password" label="New Password"
			            	name="new_password" placeholder="New Password" 
			            	theme="custom" className="input_both" doValidate={true}/>
				      	<Field 
				      		component={FormField} type="password" label="Confirm Password"
				      		name="confirm_password" placeholder="Confirm Password" 
				      		theme="custom" className="input_both" doValidate={true}/>
				      	<FormSubmit 
				      		error={error} invalid={invalid} 
				      		submitting={submitting} className="yellobtn" buttonSaveLoading="Processing..."/>
			        </Form>
			    </div>  
			</div> 
		);
	}
	formSubmit(values) {
		const {dispatch, reset, user} = this.props;
		return new Promise((resolve, reject) => {
			Http.post(`change_password/${user._id}`, values)
			.then(({data}) => {
				this.setState({success: data.message});
				dispatch(reset('update_password_form')); // Reset the form
				setTimeout( () => {
					this.setState({success: ''});
				},1500);
				resolve();
			})
			.catch(({errors}) => {
				reject(new SubmissionError({_error: errors.message}));
			});
		});
	}
}
const ChangePasswordForm = reduxForm({
  	form: 'update_password_form',
  	validate: (values) => {
    	const errors = {};
    	if(!values.password) {
      		errors.password = 'old Password is required';
    	}
    	if(!values.new_password) {
      		errors.new_password = 'New Password is required';
    	}  else if( !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(values.new_password) ) {
    		errors.new_password = 'Password must be at least 8 characters long and should contain at least one digit, one lower case and one upper case character';
    	} else if( values.confirm_password && values.new_password !== values.confirm_password ) {
    		errors.new_password = 'New Password and Confirm password should match';
    	}
    	if (!values.confirm_password) {
        	errors.confirm_password = 'Confirm Password is required';
      	}
    	
    	return errors;
  	}
})(ChangePassword);

ChangePassword.propTypes = {
	user: PropTypes.object.isRequired 
};

export default ChangePasswordForm;