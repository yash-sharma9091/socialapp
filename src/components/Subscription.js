import React, {Component} from 'react';
import BasicPlan from '../images/basic_img.png';
/*import ProPlan from '../images/basic_img2.png';
import BusinessPlan from '../images/basic_img3.png';*/
import { Form, FormGroup, Radio, HelpBlock } from 'react-bootstrap';
import { Field,reduxForm, SubmissionError} from 'redux-form';
import {Http} from '../lib/Http';
import Alert from './common/Alert';
//import FormField from './common/FormField';

class Subscription extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		plan: [],
      		selectedPlanId:"",
      		success: ''
      	}
    }
    componentDidMount() {
    	this.switchPlan('monthly');
    }
    switchPlan(name) {
    	Http.get(`plans_list?type=${name}`)
    	.then(({data}) => this.setState({plan: data}))
    	.catch(errors => console.log(errors));
    }
    handleChange(e) {
    	const name = e.target.value;
    	this.switchPlan(name);
    }
    handleClick(planId) {
    	this.setState({selectedPlanId: planId})
    }
	render() {
		const { handleSubmit, submitting, error, submitSucceeded } = this.props;
		const { plan, success } = this.state;
		return(
			<div>
				<Form onSubmit={handleSubmit(this.formSubmit)}>
					<Alert alertVisible={error || (success && submitSucceeded)} alertMsg={error || success} className={error ? "danger" : "success"} />
					<div className="clearfix radio_month text-center">  
		            	<Field
		            		onChange={(e) => this.handleChange(e)}
							name="plan_type"
							component={Subscription.renderInlineRadioGroup}
		            	/>
					</div>
					<div className="plansub_lay">
					   <ul className="plansub_lay_list clearfix">
					   		{plan.length > 0 ? 
					   			(plan.map((value, index) => {
					   				return (
				   						<li key={index}>
				   				      		<h4>{value.name}</h4>
				   				      		<div className="basic_img"><img src={BasicPlan} alt="Basic Plan"/></div>
				   				      		<div className="price"><sup>$</sup>{value.price} <span>per month</span></div>
				   				      		<ul className="plansub_tag_list">
				   				      			{value.features.map((val, i) => <li key={i}>{val}</li>)}
				   				      		</ul>
				   				      		<div className="FREE_btn">
				   				      			<button 
				   				      				type="submit" disabled={submitting} 
				   				      				onClick={() => this.handleClick(value._id)} 
				   				      				className="btn btn-default FREE_btn_box">START FOR FREE </button>
				   				      		</div>
				   				    	</li>	
				   				    );	
					   			}))
						    	: null
						   	}
					   	</ul> 
					</div>  
				</Form>	
				{/*<div class="form-group margin-bot10 clearfix">
				    <button type="button" class="btn btn-default yellobtn pull-left">Back</button>
				</div>*/}
			</div>
		);
	}
	static renderInlineRadioGroup(props) {
		const {meta, input} = props;
		return (
			<FormGroup validationState={!meta.touched ? null : (meta.error ? 'error' : null)}>
		        <Radio {...input} value="monthly" > Monthly </Radio>
		        <Radio {...input} value="yearly" > Yearly </Radio>
	        	<HelpBlock> {meta.touched && meta.error ? meta.error : null} </HelpBlock>
	        </FormGroup>
		);
	}
	formSubmit(values) {
		console.log("suv", values);
		if( !values ) {
			return;
		}	
		const {onSubmit} = this.props;
		const {selectedPlanId} = this.state;

		return new Promise((resolve, reject) => {
			Http.post('trail', {email: values.email, planId: selectedPlanId, duration: values.plan_type})
			.then(({data}) => {
				this.setState({success: data.message});
				setTimeout( () => {
					this.setState({success: ''});
					onSubmit({plan_type:values.plan_type, planId: this.state.selectedPlanId});	
				},1500);
				
				resolve();
			})
			.catch(({errors}) => {
				reject(new SubmissionError({_error: errors.message}));
			});
		});
		 
	}
}

const SubscriptionForm = reduxForm({
  	form: 'signupForm',
  	destroyOnUnmount: false, // <------ preserve form data
  	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  	validate: (values) => {
    	const errors = {};
    	if( !values.plan_type ) {
    		errors.plan_type = 'You must select one option between monthly and yearly';
    	}
    	return errors;
    }
})(Subscription);

export default SubscriptionForm;