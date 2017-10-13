import React, {Component} from 'react';
import FormSubmit from "./common/FormSubmit";
import FormField from "./common/FormField";
import Alert from './common/Alert';
import { Field,reduxForm, SubmissionError } from 'redux-form';
import { Form, FormGroup, ControlLabel } from 'react-bootstrap';
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
const createOptions = (fontSize: string) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
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
		const { error, handleSubmit, invalid, submitting, submitSucceeded} = this.props;
		return(
			<Form onSubmit={handleSubmit(this.formSubmit)}>
				<Alert alertVisible={error || (this.state.success && submitSucceeded)} alertMsg={error || this.state.success} className={error ? "danger" : "success"} />
					<FormGroup>
						<ControlLabel>Card number</ControlLabel>
						<CardNumberElement {...createOptions(this.props.fontSize)} />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Expiration date</ControlLabel>
						<CardExpiryElement {...createOptions(this.props.fontSize)} />
					</FormGroup>	
					<FormGroup>
						<ControlLabel>CVC</ControlLabel>
						<CardCVCElement {...createOptions(this.props.fontSize)} />
					</FormGroup>	
				<FormSubmit 
					error={error}
					submitting={submitting} className="yellobtn"
					formGroupClassName="margin-bot10" buttonSaveLoading="Please Wait..." buttonSave="Activate"/>
			</Form>
		);
	}
	formSubmit(values) {
		const{stripe} = this.props;
		console.log(this.props);
		return new Promise((resolve, reject) => {
			stripe.createToken()
			.then(payload => {
				if( payload.error ) {
					console.log(payload.error.message);
					reject(new SubmissionError({_error: payload.error.message}));
				} else {
					resolve()
					console.log(payload)
				}
			});
		});
		
	}
}

const ConfirmPaymentForm = reduxForm({
  	form: 'confirm_payment_form',
  	validate: (values) => {
    	const errors = {};
    	
    	return errors;
  	}
})(ConfirmPayment);

export default injectStripe(ConfirmPaymentForm);