import React, {Component} from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import { Form } from 'react-bootstrap';
import Alert from './Alert';
import { reduxForm, SubmissionError } from 'redux-form';
import FormSubmit from "./FormSubmit";
import {Http} from '../../lib/Http';
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
class StripeForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	};
    }
	render() {
		const { error, handleSubmit, invalid, submitting, fontSize} = this.props,
			{ success} = this.state;
		return (
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
				<FormSubmit 
					error={error} invalid={invalid} 
					submitting={submitting} className="yellobtn" buttonSaveLoading="Processing..."/>
			</Form>
		);
	}
	handleChange() {
		const {dispatch, clearSubmitErrors} = this.props;
		dispatch(clearSubmitErrors('StripePaymentForm'));
	}
	formSubmit(values) {
		const {stripe, user, reload} = this.props;
		
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
				Http.post('customer', {token: token.id, ip: token.client_ip, email: user.email})
				.then(({data}) => {
					this.setState({success: 'Your card detail has been securely saved with us. you can now add new website'});
					setTimeout(() => {
						reload();
					}, 2500);
					resolve();
				})
				.catch(({errors}) => reject({message: errors.message}));
			});
		})
		.catch(error => { throw new SubmissionError({_error: error.message}) } );
	}
}	

const StripePaymentForm = reduxForm({
  	form: 'StripePaymentForm',
  	pure: false
})(StripeForm);

export default injectStripe(StripePaymentForm);