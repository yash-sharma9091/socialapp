import React, {Component} from 'react';
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { reduxForm, SubmissionError } from 'redux-form';
import { FormGroup, ControlLabel, Button, Form } from 'react-bootstrap';
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import {Http} from '../lib/Http';
import { push } from 'react-router-redux';
import {Storage} from '../lib/Storage';
const createOptions = (fontSize: string) => {
  	return {
    	style: {
      		base: {
        		fontSize,
        		color: '#424770',
        		letterSpacing: '0.025em',
        		fontFamily: 'Open Sans, sans-serif',
        		'::placeholder': {
          			color: '#aab7c4',
        		},
      		},
      		invalid: {
        		color: '#9e2146',
      		},
		},
  	};
};
class ConfirmPayment extends Component {
	 constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }
	render() {
		const { success} = this.state;
		const { prevStep, error, handleSubmit, submitting, fontSize } = this.props;
		return(
			<Form onSubmit={handleSubmit(this.formSubmit)}>
				<Alert alertVisible={error || (success)} alertMsg={error || success} className={error ? "danger" : "success"} />
				<FormGroup>
					<ControlLabel>Card number</ControlLabel>
					<CardNumberElement onChange={() => this.handleChange()} {...createOptions(fontSize)} />
				</FormGroup>
				<FormGroup>
					<ControlLabel>Expiration date</ControlLabel>
					<CardExpiryElement onChange={() => this.handleChange()} {...createOptions(fontSize)} />
				</FormGroup>	
				<FormGroup>
					<ControlLabel>CVC</ControlLabel>
					<CardCVCElement onChange={() => this.handleChange()} {...createOptions(fontSize)} />
				</FormGroup>	
					
				<div className="row margin-bot10">	
					<div className="col-md-12">	
						<FormSubmit 
							error={error}
							submitting={submitting} className="yellobtn pull-left"
							buttonSaveLoading="Please Wait..." buttonSave="Activate"/>
						<Button onClick={prevStep} style={{marginTop: -26}} className="grayfillbtn pull-right" >Back</Button>
					</div>	
				</div>
			</Form>
		);
	}
	
	handleChange() {
		const {dispatch, clearSubmitErrors} = this.props;
		dispatch(clearSubmitErrors('signupForm'));
	}

	formSubmit(values) {
		
		const{stripe, dispatch} = this.props;
		return new Promise((resolve, reject) => {
			stripe.createToken()
			.then(payload => {
				if( payload.error ) {
					reject({message: payload.error.message});
				} else {
					resolve({token: payload.token});
				} 
			});		
		})
		.then(({token}) => {
			return new Promise((resolve, reject) => {
				let _storage = Storage.get('tmpSignup');
				if( _storage ) {
					Http.post('customer', {token: token.id, ip: token.client_ip, email: atob(_storage.email)})
					.then(({data}) => {
						this.setState({success: data.message});
						Storage.remove('tmpSignup');
						setTimeout(() => dispatch(push('/login')), 2500);
						resolve();
					})
					.catch(({errors}) => reject({message: errors.message}));
				} else {
					Storage.remove('tmpSignup');
				}	
			});
		})
		.catch(error => { throw new SubmissionError({_error: error.message}); } );
		
	}
}

const ConfirmPaymentForm = reduxForm({
  	form: 'signupForm',
  	pure: false,
  	destroyOnUnmount: false, // <------ preserve form data
  	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(ConfirmPayment);

export default injectStripe(ConfirmPaymentForm);