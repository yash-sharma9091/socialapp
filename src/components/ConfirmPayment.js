import React, {Component} from 'react';
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { reduxForm, SubmissionError } from 'redux-form';
import { Form, FormGroup, ControlLabel } from 'react-bootstrap';
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import {Http} from '../lib/Http';
import { push } from 'react-router-redux';
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
		const { error, handleSubmit, submitting, submitSucceeded} = this.props;
		return(
			<Form onSubmit={handleSubmit(this.formSubmit)}>
				<Alert alertVisible={error || (this.state.success && submitSucceeded)} alertMsg={error || this.state.success} className={error ? "danger" : "success"} />
					<FormGroup>
						<ControlLabel>Card number</ControlLabel>
						<CardNumberElement onChange={() => this.handleChange()} {...createOptions(this.props.fontSize)} />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Expiration date</ControlLabel>
						<CardExpiryElement onChange={() => this.handleChange()} {...createOptions(this.props.fontSize)} />
					</FormGroup>	
					<FormGroup>
						<ControlLabel>CVC</ControlLabel>
						<CardCVCElement onChange={() => this.handleChange()} {...createOptions(this.props.fontSize)} />
					</FormGroup>	
				<FormSubmit 
					error={error}
					submitting={submitting} className="yellobtn"
					formGroupClassName="margin-bot10" buttonSaveLoading="Please Wait..." buttonSave="Activate"/>
			</Form>
		);
	}
	handleChange() {
		const { dispatch, clearSubmitErrors } = this.props;
		dispatch(clearSubmitErrors('confirm_payment_form'));
	}
	formSubmit(values) {
		console.log(values);return;
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
				Http.post('customer', {token: token.id, email: values.email})
				.then(({data}) => {
					this.setState({success: data.message});
					setTimeout(() => dispatch(push('/login')), 2000);
				})
				.catch(({errors}) => reject({message: errors.message}));
			});
		})
		.catch(error => {throw new SubmissionError({_error: error.message}) });
		
	}
}

const ConfirmPaymentForm = reduxForm({
  	form: 'signupForm',
  	destroyOnUnmount: false, // <------ preserve form data
  	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(ConfirmPayment);

export default injectStripe(ConfirmPaymentForm);