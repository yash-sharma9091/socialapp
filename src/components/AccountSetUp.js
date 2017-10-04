import React, {Component} from 'react';
import { push } from 'react-router-redux';
import FormSubmit from "./common/FormSubmit";
import FormField from "./common/FormField";
import {FormCheckbox} from "./common/FormCheckbox";
import Alert from './common/Alert';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import {Http} from '../lib/Http';

class AccountSetUp extends Component {
	 constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }
	render() {
		const { error, handleSubmit, invalid, submitting, submitSucceeded} = this.props;
		return(
			<Form onSubmit={handleSubmit(this.formSubmit)}>
				<Alert alertVisible={error || (this.state.success && submitSucceeded)} alertMsg={error || this.state.success} className={error ? "danger" : "success"} />
				<div className="clearfix">  
				  	<Field 
				  		component={FormField} type="text"
				  		name="customer_name" label="Customer Name"
				  		placeholder="Customer Name" theme="custom"
				  		formGroupClassName="group46 pull-left" className="input_both" doValidate={true}/>
				  	<Field 
				  		component={FormField} type="text"
				  		name="business_name" label="Business Name"
				  		placeholder="Business Name" theme="custom"
				  		formGroupClassName="group46 pull-right" className="input_both" doValidate={true}/>
				</div>
				<div className="clearfix">  
				  <Field 
				  		component={FormField} type="url"
				  		name="customer_url" label="Customer URL"
				  		placeholder="Customer URL" theme="custom"
				  		formGroupClassName="group46 pull-left" className="input_both" doValidate={true}/>
				  	<Field 
				  		component={FormField} type="email"
				  		name="email" label="Email Id"
				  		placeholder="Email Id" theme="custom"
				  		formGroupClassName="group46 pull-right" className="input_both" doValidate={true}/>
				</div>
				<div className="clearfix">  
				  	<Field 
				  		component={FormField} type="text"
				  		name="mobile" label="Mobile No."
				  		placeholder="Mobile No." theme="custom"
				  		formGroupClassName="group46 pull-left" className="input_both" doValidate={true}/>
				  	<Field 
				  		component={FormField} type="password"
				  		name="password" label="Password"
				  		placeholder="Password" theme="custom"
				  		formGroupClassName="group46 pull-right" className="input_both" doValidate={true}/>
				</div>
				<div className="clearfix">  
				 	<Field 
				  		component={FormField} type="password"
				  		name="confirm_password" label="Confirm Password"
				  		placeholder="Confirm Password" theme="custom"
				  		formGroupClassName="group46 pull-left" className="input_both" doValidate={true}/>
				</div>
				<Field 
					name="agree" className="pull-left" 
					formGroupClassName="clearfix" checkboxText="I agree the Terms &amp; Conditions." 
					component={FormCheckbox} type="checkbox" doValidate={true}/> 
				<FormSubmit 
					error={error} invalid={invalid}
					submitting={submitting} className="yellobtn"
					formGroupClassName="margin-bot10" buttonSaveLoading="Processing..." buttonSave="Sign Up"/>
			</Form>
		);
	}
	formSubmit(values) {
		const {dispatch, reset} = this.props;

		return new Promise((resolve, reject) => {
			Http.post('register', values)
			.then(({data}) => {
				this.setState({success: data.message});
				dispatch(reset('account_setup')); // Reset the form
				setTimeout( () => {
					this.setState({success: ''});
					dispatch(push('/register?next=subscription'));	// redirect the user to next step
				},1500);
				
				resolve();
			})
			.catch(({errors}) => {
				let _message = {_error: errors.message};
				if( errors.hasOwnProperty('email') && errors.hasOwnProperty('mobile') ) {
					_message = {email: errors.email.message, mobile: errors.mobile.message};
				} 
				else if( errors.hasOwnProperty('email') ) {
					_message = {email: errors.email.message};
				}
				else if( errors.hasOwnProperty('mobile') ) {
					_message = {mobile: errors.mobile.message};
				}
				reject(new SubmissionError(_message));
			});
		});
	}
}

const AccountSetUpForm = reduxForm({
  	form: 'account_setup',
  	validate: (values) => {
    	const errors = {};
    	if(!values.email) {
      		errors.email = 'Email is required';
    	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        	errors.email = 'Invalid email address'
      	}
      	if(!values.customer_name) {
      		errors.customer_name = 'Customer Name is required';
    	}
    	if(!values.business_name) {
      		errors.business_name = 'Business Name is required';
    	}
    	if(!values.customer_url) {
      		errors.customer_url = 'Customer Url is required';
    	} else if(!/^[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$/i.test(values.customer_url)) {
    		errors.customer_url = 'Enter a valid Url';
    	}
    	if(!values.mobile) {
      		errors.mobile = 'Mobile No is required';
    	} else if(!/^(0|[1-9][0-9]{9})$/i.test(values.mobile)) {
    		errors.mobile = 'Invalid phone number, must be 10 digits';
    	}
    	if(!values.password) {
      		errors.password = 'New Password is required';
    	} else if( !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(values.password) ) {
    		errors.password = 'Password must be at least 8 characters long and should contain at least one digit, one lower case and one upper case character';
    	}else if( values.confirm_password && values.password !== values.confirm_password ) {
    		errors.password = 'New Password and Confirm password should match';
    	}
    	if (!values.confirm_password) {
        	errors.confirm_password = 'Confirm Password is required';
      	}
      	if(!values.agree) {
      		errors.agree = 'You must agree with Terms & Conditions';
      	}
    	return errors;
  	}
})(AccountSetUp);

export default AccountSetUpForm;