import React, {Component} from 'react';
import BasicPlan from '../images/basic_img.png';
import ProPlan from '../images/basic_img2.png';
import BusinessPlan from '../images/basic_img3.png';
import { Form, FormGroup, Radio, HelpBlock } from 'react-bootstrap';
import { Field,reduxForm } from 'redux-form';

class Subscription extends Component {
	 constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
    }
	render() {
		const { handleSubmit} = this.props;
		return(
			<div>
				<Form onSubmit={handleSubmit(this.formSubmit)}>
					<div className="clearfix radio_month text-center">  
		            	<Field
							name="subscription_plan"
							component={Subscription.renderInlineRadioGroup}
		            	/>
					</div>
					<div className="plansub_lay">
					   <ul className="plansub_lay_list clearfix">
							<li>
					      		<h4>Basic plan</h4>
					      		<div className="basic_img"><img src={BasicPlan} alt="Basic Plan"/></div>
					      		<div className="price"><sup>$</sup>22 <span>per month</span></div>
					      		<ul className="plansub_tag_list">
					        		<li>Lorem Ipsum</li>
					        		<li>Lorem Ipsum Dummy</li>
					        		<li>Lorem Ipsum</li>
					      		</ul>
					      		<div className="FREE_btn">
					      			<button type="submit" className="btn btn-default FREE_btn_box">START FOR FREE</button>
					      		</div>
					    	</li>
					    	<li>
					      		<h4>Pro plan</h4>
					      		<div className="basic_img"><img src={ProPlan} alt="Pro Plan"/></div>
					      		<div className="price"><sup>$</sup>42 <span>per month</span></div>
					      		<ul className="plansub_tag_list">
					        		<li>Lorem Ipsum</li>
					        		<li>Lorem Ipsum Dummy</li>
					        		<li>Lorem Ipsum</li>
					      		</ul>
					      		<div className="FREE_btn">
					      			<button type="submit" className="btn btn-default FREE_btn_box">START FOR FREE</button>
					      		</div>
					    	</li>
					    	<li>
					      		<h4>business plan</h4>
					      		<div className="basic_img"><img src={BusinessPlan} alt="Business Plan"/></div>
					      		<div className="price"><sup>$</sup>96 <span>per month</span></div>
					      		<ul className="plansub_tag_list">
					        		<li>Lorem Ipsum</li>		
					        		<li>Lorem Ipsum Dummy</li>
					        		<li>Lorem Ipsum</li>
					      		</ul>
					      		<div className="FREE_btn">
					      			<button type="submit" className="btn btn-default FREE_btn_box">START FOR FREE</button>
					      		</div>
					    	</li>
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
		console.log(values);
	}
}

const SubscriptionForm = reduxForm({
  	form: 'subscription_form',
  	validate: (values) => {
    	const errors = {};
    	if( !values.subscription_plan ) {
    		errors.subscription_plan = 'You must select one option between monthly and yearly';
    	}
    	return errors;
    }
})(Subscription);

export default SubscriptionForm;