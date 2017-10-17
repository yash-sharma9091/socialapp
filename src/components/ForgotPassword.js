import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {FormSelect} from './common/FormSelect';
import { Form } from 'react-bootstrap';
import {Http} from '../lib/Http';
import ResetPasswordOTPDialog from './ResetPasswordOTPDialog';

class ForgotPassword extends Component {
    constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: '',
      		showEmailField: true,
      		showNumberField: false,
      		showRecoverPasswordDialog: false
      	};
      	
    }
	render() {
		const { error, handleSubmit, invalid, submitting, submitSucceeded} = this.props,
		options = [
			{key: 'email', value: 'Email Address'},
			{key: 'mobile', value: 'Mobile Number'}
		],
		{showEmailField, showNumberField, success, showRecoverPasswordDialog} = this.state;
	
		return (
			<div>
				<div className="sign_con">
					<div className="sign_con_inner forfot_lay">
				    	<div className="signhd">Forgot Password?</div>
				    	<div className="form supporfom">
				      		<div className="supporfom_txt">Enter your registered E-mail address or Mobile number below to reset your password.</div>
				      		<Form onSubmit={handleSubmit(this.formSubmit)}>
				      			<Alert alertVisible={error || (success && submitSucceeded)} alertMsg={error || success} className={error ? "danger" : "success"} />
				      			<Field 
				      				component={FormSelect} 
				      				name="type" label="Select" className="input_both" options={options}
				      				displayKey={"key"}
				      				displayLabel={"value"}
				      				onChange={(e) => this.toggleField(e)}
				      				placeholder="Select"/>
				      				{showEmailField ? 
						      			<Field 
						      				component={FormField} type="email"
						      				name="email" label="Email" 
						      				placeholder="Email Address" theme="custom" 
						      				className="input_both" doValidate={true}/>
						      			: null
						      		}
						      		{showNumberField ? 		
						      			<Field 
						      				component={FormField} type="text"
						      				name="mobile" label="Mobile Number" 
						      				placeholder="Mobile Number" theme="custom" 
						      				className="input_both" doValidate={true}/>
						      			: null 
						      		}		
					      		<FormSubmit 
					      			error={error} invalid={invalid} 
					      			submitting={submitting} className="yellobtn" buttonSaveLoading="Processing..."/>
					      	</Form>	
				    	</div>
				  	</div>
				</div>
				<ResetPasswordOTPDialog show={showRecoverPasswordDialog} hide={() => this.hideOTPDialog()}/>
			</div>	
		);
	}
	toggleField(event) {
		let selectedVal = event.target.value;
		
		if(selectedVal === 'mobile') {
			this.setState({showNumberField: true, showEmailField: false});
		} else if(selectedVal === 'email') {
			this.setState({showNumberField: false, showEmailField: true});
		}
	}
  	showOTPDialog(values) {
  		if( values.type === 'mobile' ) {
  			setTimeout( () => {
  				this.setState({success:'', showRecoverPasswordDialog: true});
  			}, 1000);	
  		}
  	}

  	hideOTPDialog() {
  		this.setState({showRecoverPasswordDialog: false});
  	}
	formSubmit(values) {
		const {dispatch, reset} = this.props;
		return new Promise((resolve, reject) => {
			Http.post('forgot_password', values)
			.then(({data}) => {
				this.setState({success: data.message});
				dispatch(reset('forgot_password'));
				this.showOTPDialog(values);
				resolve();
			})
			.catch(({errors}) => {
				reject(new SubmissionError({_error: errors.message}));
			});
		});
	}
}

const ForgotPasswordForm = reduxForm({
  	form: 'forgot_password',
  	validate: (values) => {
    	const errors = {};
    	if(!values.email) {
      		errors.email = 'Email is required';
    	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        	errors.email = 'Invalid email address'
      	}
      	if(!values.mobile) {
      		errors.mobile = 'Mobile No is required';
    	} else if(!/^(0|[1-9][0-9]{9})$/i.test(values.mobile)) {
    		errors.mobile = 'Invalid phone number, must be 10 digits';
    	}
    	
    	return errors;
  	}
})(ForgotPassword);

const mapStateToProps = (state) => ({
	initialValues: {
		type: 'email'
	}
});	
export default connect(mapStateToProps)(ForgotPasswordForm);