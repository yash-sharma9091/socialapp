<<<<<<< HEAD
import React, { Component } from 'react';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { AUTH_REQUEST } from '../reducer';

class Login extends Component {
  	constructor(props) {
    	super(props);
    	this.formSubmit = this.formSubmit.bind(this);
  	}

  	render() {
	    const { error, handleSubmit, invalid, submitting} = this.props;
	    
	    return (
	    	<div className="container">
	    		<Alert alertVisible={error} alertMsg={error} className="danger" />
	        	<Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
	        		<Field component={FormField} type="email" name="email" label="Email" placeholder="Email Address" doValidate={true}/>
	        		<Field component={FormField} type="password" name="password" label="Password" placeholder="Password" doValidate={true}/>
	        		<FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Processing..."
	        		  buttonSave="Login"/>
	        	</Form>
	     	</div>
	    );
  	}
  	formSubmit(values) {
  		const { dispatch } = this.props;
  		return new Promise((resolve, reject) => {
  			dispatch({
  				type: AUTH_REQUEST,
  				user: {
  					email: values.email,
  					password: values.password
  				},
  				callbackError: (error) => {
  					reject(new SubmissionError({_error: error}));
  				},
  				callbackSuccess: () => {
  					dispatch(push('/'));
  					resolve();
  				}
  			})
  		});
  	}
=======
import React from 'react';
import LoginForm from './LoginForm';
import LoginBanner from '../images/login_banner.jpg';

const Login = () => {
	const style = {
		backgroundSize: 'cover',
		backgroundImage: 'url(' + LoginBanner + ')',
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat'
	};
	return (
		<section className="loginsection" style={style}>
		  <div className="container">
		    <div className="sign_con">
		      <div className="sign_con_inner">
		        <div className="signhd">Sign in</div>
		        <div className="form supporfom">
		          <LoginForm/>
		        </div>
		      </div>
		      <div className="right_sign">
		        <div className="right_sign_inner">
		          <div className="right_sign_cell">
		            <div className="sign_up_lay">
		              <div className="signhd signhd_gray">Sign up</div>
		              <p>Please enter your details to sign up and increase your
		                website conversions.</p>
		              <button type="button" className="btn btn-default graybtn rpl">Sign up</button>
		            </div>  
		          </div>
		        </div>  
		      </div> 
		    </div>  
		  </div>  
		</section>
	);
>>>>>>> 213b75f6da504c347b30f5e47abff48e278133ac
}

export default Login;