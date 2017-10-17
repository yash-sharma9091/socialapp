import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormGroup, HelpBlock, ControlLabel, FormControl } from 'react-bootstrap';
export class FormSelect extends Component {
	render() {
		const {meta, input, label, formGroupClassName, className, doValidate} = this.props;
		
		if (doValidate) {
			return (
		        <FormGroup className={formGroupClassName} validationState={!meta.touched ? null : (meta.error ? 'error' : null)}>
					<ControlLabel>{label}</ControlLabel>
					<FormControl componentClass="select" {...input} className={className}>
		                {this.empty()}
		                {this.options()}
					</FormControl>
					<HelpBlock>
				  		{meta.touched && meta.error ? meta.error : null}
					</HelpBlock>
				</FormGroup>
		    );    
		} else {
			return (
				<FormGroup className={formGroupClassName} >
					<ControlLabel>{label}</ControlLabel>
					<FormControl componentClass="select" {...input} className={className}>
						{this.empty()}
		                {this.options()}
					</FormControl>
				</FormGroup>
		    ); 
		}    
	}	

	options() {
		const { options, displayKey, displayLabel } = this.props;
		return options ? 
			options.map((values, index) => <option key={index} value={values[displayKey]}>{values[displayLabel]}</option>)
			: null;
	}

	empty() {
		const {empty, label} = this.props;
		return empty ? (<option value="">{label}</option>) : null;
	}
}

// prop checks
FormSelect.propTypes = {
	meta: PropTypes.object,
	input: PropTypes.object,
	doValidate: PropTypes.bool, // true or false
	label: PropTypes.any,  // the field text or a react component if we have html inside (empty string by default)
	type: PropTypes.string,   // input type: text (by default), password
	placeholder: PropTypes.string,    // input placeholder (empty string by default)
	className: PropTypes.string,  // the class name (empty string by default)
	options: PropTypes.array,  // the select options array (empty string by default)
	displayKey: PropTypes.string,
	displayLabel: PropTypes.string
}