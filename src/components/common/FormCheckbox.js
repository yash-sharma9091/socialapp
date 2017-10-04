import React from 'react';
import { FormGroup, Checkbox, HelpBlock } from 'react-bootstrap';
export const FormCheckbox = (props) => {

	const {meta, input, checkboxText, formGroupClassName, className, doValidate} = props;
	if (doValidate) {
		return (
			<FormGroup className={formGroupClassName}
	          	validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
		        <Checkbox {...input} className={className}> {checkboxText}
		          	<HelpBlock>
		            	{meta.touched && meta.error ? meta.error : null}
		          	</HelpBlock>
		        </Checkbox>  	
	        </FormGroup>
	    );    
	} else {
		return (
			<FormGroup className={formGroupClassName} >
		        <Checkbox {...input} className={className}> {checkboxText} </Checkbox>
	        </FormGroup>
	    ); 
	}    
}