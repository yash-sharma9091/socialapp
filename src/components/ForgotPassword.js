import React, {Component} from 'react';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import {Http} from '../lib/Http';

class ForgotPassword extends Component {
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
			    	<div className="signhd">Forgot Password?</div>
			    	<div className="form supporfom">
			      		<div className="supporfom_txt">Enter your e-mail address below to reset your password.</div>
			      		<Form onSubmit={handleSubmit(this.formSubmit)}>
			      			<Alert alertVisible={error || (this.state.success && submitSucceeded)} alertMsg={error || this.state.success} className={error ? "danger" : "success"} />
			      			<Field component={FormField} type="email" name="email" label="Email" placeholder="Email Address" theme="custom" className="input_both" doValidate={true}/>
				      		<FormSubmit error={error} invalid={invalid} submitting={submitting} className="yellobtn" buttonSaveLoading="Processing..."/>
				      	</Form>	
			    	</div>
			  	</div>
			</div>
		);
	}
	formSubmit(values) {
		return new Promise((resolve, reject) => {
			Http.post('forgot_password', values)
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

ForgotPassword = reduxForm({
  	form: 'forgot_password',
  	validate: (values) => {
    	const errors = {};
    	if(!values.email) {
      		errors.email = 'Email is required';
    	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        	errors.email = 'Invalid email address'
      	}
    	return errors;
  	}
})(ForgotPassword);

export default ForgotPassword;