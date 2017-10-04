import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import {Http} from '../lib/Http';

class ResetPassword extends Component {
    constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }
	render() {
		const { error, handleSubmit, invalid, submitting, submitSucceeded} = this.props;
		
		return (
			<div className="sign_con">
				<div className="sign_con_inner forfot_lay">
			    	<div className="signhd">Reset Password?</div>
			    	<div className="form supporfom">
			      		<div className="supporfom_txt">Enter new password below to reset your current password.</div>
			      		<Form onSubmit={handleSubmit(this.formSubmit)}>
				      		<Alert alertVisible={error || (this.state.success && submitSucceeded)} alertMsg={error || this.state.success} className={error ? "danger" : "success"} />
				      		<Field component={FormField} type="password" name="password" label="New Password" placeholder="New Password" theme="custom" className="input_both" doValidate={true}/>
				      		<Field component={FormField} type="password" name="confirm_password" label="Confirm Password" placeholder="Confirm Password" theme="custom" className="input_both" doValidate={true}/>
				      		<FormSubmit error={error} invalid={invalid} submitting={submitting} className="yellobtn" buttonSaveLoading="Processing..."/>
		      			</Form>	
			    	</div>
			  	</div>
			</div>
		);
	}
	formSubmit(values) {
		const {token} = this.props;
		return new Promise((resolve, reject) => {
			Http.post(`reset_password/${token}`, values)
			.then(({data}) => {
				this.setState({success: data.message})
				resolve();
			})
			.catch(({errors}) => {
				reject(new SubmissionError({_error: errors.message}));
			});
		});
	}
}		

const ResetPasswordForm = reduxForm({
  	form: 'reset_password',
  	validate: (values) => {
    	const errors = {};
    	if(!values.password) {
      		errors.password = 'New Password is required';
    	}  else if( !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(values.password) ) {
    		errors.password = 'Password must be at least 8 characters long and should contain at least one digit, one lower case and one upper case character';
    	} else if( values.confirm_password && values.password !== values.confirm_password ) {
    		errors.password = 'New Password and Confirm password should match';
    	}
    	if (!values.confirm_password) {
        	errors.confirm_password = 'Confirm Password is required';
      	}
    	return errors;
  	}
})(ResetPassword);

// export the connected class
function mapStateToProps(state, own_props) {
  	return {
  		token: own_props.token
  	};
}
export default connect(mapStateToProps)(ResetPasswordForm);
