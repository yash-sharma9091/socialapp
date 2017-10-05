import React from 'react';
import { FormGroup, Radio, HelpBlock } from 'react-bootstrap';

export const FormRadio = (props) => {
	const {meta, input, radioButtonText, formGroupClassName, className, doValidate} = props;
	if (doValidate) {
		return (
	        <FormGroup className={formGroupClassName}  validationState={!meta.touched ? null : (meta.error ? 'error' : 'success')}>
		        <Radio {...input} className={className}> {radioButtonText}
	          		<HelpBlock>
	          	  	{meta.touched && meta.error ? meta.error : null}
	          		</HelpBlock>
		        </Radio> 	
	        </FormGroup>
	    );    
	} else {
		return (
			<FormGroup className={formGroupClassName} >
		        <Radio {...input} className={className}> {radioButtonText} </Radio>
	        </FormGroup>
	    ); 
	}    
}