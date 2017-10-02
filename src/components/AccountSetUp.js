import React, {Component} from 'react';
import { push } from 'react-router-redux';
import FormSubmit from "./common/FormSubmit";
import FormField from "./common/FormField";
import Alert from './common/Alert';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form, FormGroup, Checkbox, HelpBlock } from 'react-bootstrap';
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
				  		component={FormField} type="text"
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
				<Field name="agree" component={AccountSetUp.renderTermsCondition} type="checkbox"/> 
				<FormSubmit 
					error={error} 
					invalid={invalid} 
					submitting={submitting} 
					className="yellobtn" 
					formGroupClassName="margin-bot10"
					buttonSaveLoading="Processing..." 
					buttonSave="Sign Up"/>
			</Form>
		);
	}
	static renderTermsCondition(props) {
		const {meta, input} = props;
		return (
			<FormGroup className="clearfix"
	          	validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
		        <Checkbox {...input} className="pull-left"> I agree the Terms &amp; Conditions. 
		          	<HelpBlock>
		            	{meta.touched && meta.error ? meta.error : null}
		          	</HelpBlock>
		        </Checkbox>  	
	        </FormGroup>
	    );    
	}
	formSubmit(values) {
		const {dispatch} = this.props;

		return new Promise((resolve, reject) => {
			Http.post('register', values)
			.then(({data}) => {
				this.setState({success: data.message});
				setTimeout( () => {
					this.setState({success: ''});
					dispatch(push('/register?next=subscription'));	
				},2000);
				
				resolve();
			})
			.catch(({errors}) => {
				let _message = {_error: errors.message};
				if( errors.hasOwnProperty('email') ) {
					_message = {email: errors.email.message};
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