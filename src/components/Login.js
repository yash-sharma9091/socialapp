import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import { authorize } from '../reducer';

class Login extends Component {
  	constructor(props) {
    	super(props);
    	this.formSubmit = this.formSubmit.bind(this);
  	}

  	render() {
	    const {error, token, user, handleSubmit, invalid, submitting} = this.props;
	    console.log(submitting);
    	if (token) {
      		return <Redirect to="/" />;
    	}

	    return (
	    	<div className="container">
	        	<Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
	        		<Field component={FormField} type="email" name="email" label="Email" placeholder="Email Address" doValidate={true}/>
	        		<Field component={FormField} type="password" name="password" label="Password" placeholder="Password" doValidate={true}/>
	        		<FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
	        		  buttonSave="Login"/>
	        	</Form>
	     	</div>
	    );
  	}
  	formSubmit(values) {
  		this.props.dispatch(authorize(values.email, values.password));
  	}
}
Login = reduxForm({
	form: 'user_login',
	validate: (values) => {
		const errors = {};
		if(!values.email) {
			errors.email = 'Username is required';
		}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    		errors.email = 'Invalid email address'
  		}
  		if (!values.password) {
  		    errors.password = 'Password is Required'
  		}
		return errors;
	}
})(Login);
const mapStateToProps = (state) => ({
 	token: state.auth.token,
 	error: state.auth.error
});

export default connect(mapStateToProps)(Login);