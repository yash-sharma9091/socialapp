import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import FormField from "./common/FormField";
import Alert from './common/Alert';
import {connect} from 'react-redux';
import { Field,reduxForm } from 'redux-form';
import FormSubmit from "./common/FormSubmit";

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
			            	name="password"
			            	placeholder="Old Password" theme="custom" 
			            	className="input_both" doValidate={true}/>
			            <Field 
			            	component={FormField} type="password" 
			            	name="new_password" placeholder="New Password" 
			            	theme="custom" className="input_both" doValidate={true}/>
				      	<Field 
				      		component={FormField} type="password" 
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
		console.log(values);
	}
}
const ChangePasswordForm = reduxForm({
  	form: 'settings_form',
  	validate: (values) => {
    	const errors = {};
    	if(!values.password) {
      		errors.password = 'New Password is required';
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

const mapStateToProps = (state) => ({
	
});	
export default connect(mapStateToProps)(ChangePasswordForm);