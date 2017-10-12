import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import FormField from "./common/FormField";
import Alert from './common/Alert';
import {connect} from 'react-redux';
import { Field,reduxForm, SubmissionError } from 'redux-form';
import FormSubmit from "./common/FormSubmit";
import FileInput from "./common/FileInput";
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {PROFILE_UPDATE_REQUEST} from '../constant';

class Setting extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	};
    }
	render() {
		const { error, handleSubmit,initialValues, invalid, submitting, submitSucceeded} = this.props,
		{ success } = this.state;
		return (
			<div className="right_dash pull-right">
			    <div className="set_hd_inner">Profile</div>
			    <div className="form_dash supporfom">
			        <Form onSubmit={handleSubmit(this.formSubmit)}>
			        	<Alert alertVisible={error || (success && submitSucceeded)} alertMsg={error || success} className={error ? "danger" : "success"} />
        	            <Field 
              				component={FileInput} type="file"
              				label="Profile Image" className="customFileInput" // This class is just for designing purpose
              				name="image"/>
			            <Field 
		      				component={FormField} type="text"
		      				name="customer_name"  label="Name" 
		      				placeholder="Name" theme="custom" 
		      				className="input_both" doValidate={true}/>
			            <Field 
		            		component={FormField} type="url"
		            		name="customer_url" label="Customer URL" 
		            		placeholder="Customer URL" theme="custom"
		            		className="input_both" doValidate={true}/>
			            {/*<Field 
					  		component={FormField} type="email"
					  		name="email" label="Email" 
					  		placeholder="Email Id" theme="custom"
					  		className="input_both" disabled={true} doValidate={true}/>*/}
					  	<FormGroup>
					  		<ControlLabel>Email</ControlLabel>
					  	    <FormControl.Static> {initialValues.email} </FormControl.Static>
				  		</FormGroup>	
			            <Field 
					  		component={FormField} type="text"
					  		name="mobile" label="Mobile" 
					  		placeholder="Contact Number" theme="custom"
					  		className="input_both" doValidate={true}/>
			            <FormSubmit 
			              	error={error} invalid={invalid}
			              	submitting={submitting} className="yellobtn"
			              	formGroupClassName="margin-bot10" buttonSaveLoading="Processing..." buttonSave="Save"/>
			        </Form>
			    </div>  
			</div>
		);
	}
	formSubmit(values) {
		const { dispatch } = this.props;
        return new Promise((resolve, reject) => {
          	dispatch({
            	type: PROFILE_UPDATE_REQUEST,
            	user: values,
            	callbackError: (error) => {
              		reject(new SubmissionError({_error: error}));
            	},
            	callbackSuccess: () => {
            		resolve();
              		this.setState({success: 'Your profile has been updated successfully!!'});
              		setTimeout( () => {
  						this.setState({success:''});
  					}, 2000);
            	}
          	})
        });
	}
}

const SettingForm = reduxForm({
  	form: 'profile_form',
  	validate: (values) => {
    	const errors = {};
    	/*if(!values.email) {
      		errors.email = 'Email is required';
    	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        	errors.email = 'Invalid email address'
      	}*/
      	if(!values.mobile) {
      		errors.mobile = 'Mobile No is required';
    	} else if(!/^(0|[1-9][0-9]{9})$/i.test(values.mobile)) {
    		errors.mobile = 'Invalid phone number, must be 10 digits';
    	}
    	if(!values.customer_name) {
      		errors.customer_name = 'Customer Name is required';
    	}
    	if(!values.customer_url) {
      		errors.customer_url = 'Customer Url is required';
    	} else if(!/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$/i.test(values.customer_url)) {
    		errors.customer_url = 'Enter a valid Url';
    	}
    	return errors;
  	}
})(Setting);

const mapStateToProps = (state) => ({
	initialValues: state.auth.user
});	
export default connect(mapStateToProps)(SettingForm);