/* global _ */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';
import {Http} from '../lib/Http';
import Alert from './common/Alert';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import {FormSelect} from './common/FormSelect';
class EditWebsiteDialog extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			plan : [],
			success: ''
		}
	}
	componentDidMount() {
		Http.get('plans_list?type=all')
		.then(({data}) => this.setState({plan: data}))
		.catch(errors => console.log(errors));
	}
	onExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('EditWebsiteDialogForm'));
	}
	render(){
		const {show, hideDialog, handleSubmit, error, invalid, submitting, client} = this.props;
		const { plan, success } = this.state;
		const options = plan.map((value, index) => {
			return {
				_id: value._id, 
				value: `$(${value.price}) - ${value.type.charAt(0).toUpperCase()}${value.type.slice(1)}, ${value.name}`
			}
		});
		return (
			<Modal show={show} onHide={hideDialog} className="websiteModal" onExited={() => this.onExited()}>
				<Modal.Header closeButton>
					<Modal.Title>Update <strong>Website Url</strong></Modal.Title>
				</Modal.Header>	
				<Modal.Body className="supporfom">
					<div className="form supporfom">
						<Form onSubmit={handleSubmit(this.formSubmit)}>
							<Alert alertVisible={error || (success)} alertMsg={error || success} className={error ? "danger" : "success"} />
							<div className="clearfix">  
								
								<Field 
									component={FormField} type="url"
									name="website_url" label="Website URL"
									placeholder="Website URL" theme="custom"
									 className="input_both" doValidate={true}/>	
							</div>
							<div className="clearfix">  
								<Field 
									component={FormSelect} 
									name="plan_id" label="Select Plan" className="input_both" 
									options={options} displayKey={"_id"}
									empty={true}
									displayLabel={"value"}
									placeholder="Select" doValidate={true}/>
							</div>
							<FormSubmit 
				      			error={error} invalid={invalid} 
				      			formGroupClassName="margin-bot10" buttonSave="SUBSCRIBE NOW"
				      			submitting={submitting} className="yellobtn" buttonSaveLoading="Processing..."/>
						</Form>
		            </div>
				</Modal.Body>
			</Modal>		
		);
	}
	formSubmit(values) {
		const{dispatch, reset, user, hideDialog} = this.props;
		const request = _.assign(values, { user_id: user._id });
		return new Promise((resolve, reject) => {
			Http.post('initiate_payment', request)
			.then(({data}) => {
				this.setState({success: data.message});
				setTimeout(() => {
					this.setState({success:''});
					resolve();
				}, 2000);
			})
			.catch(({errors}) => reject({message: errors.message}) );
		})
		.then(response => {
			return new Promise((resolve, reject) => {
				Http.post('add_website', request)
				.then(({data}) => {
					this.setState({success: data.message});
					dispatch(reset('EditWebsiteDialogForm'));
					setTimeout(() => {
						hideDialog();
						this.setState({success:''});
					}, 1500);
					resolve();
				})
				.catch(({errors}) => reject({message: errors.message}) );
			});	
		})
		.catch(error => {throw new SubmissionError({_error: error.message})});
	}
}

// prop checks
EditWebsiteDialog.propTypes = {
  	show: PropTypes.bool.isRequired,
  	hideDialog: PropTypes.func.isRequired
}

const EditWebsiteDialogForm = reduxForm({
  	form: 'EditWebsiteDialogForm',
  	validate: (values) => {
    	const errors = {};
    	if( !values.plan_name ){
    		errors.plan_name = 'Plan Name is required';
    	}
    	if(!values.website_url) {
      		errors.website_url = 'Customer Url is required';
    	} else if(!/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$/i.test(values.website_url)) {
    		errors.website_url = 'Enter a valid Url';
    	}
    	if( !values.plan_id ) {
    		errors.plan_id = 'You must select one plan to add a new website';
    	}
    	
    	return errors;
  	}
})(EditWebsiteDialog);
	
export default EditWebsiteDialogForm;