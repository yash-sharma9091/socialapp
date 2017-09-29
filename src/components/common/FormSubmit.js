import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FormGroup, Button } from "react-bootstrap";

// Form submit component
export default class FormSubmit extends Component {
  // render
  render() {
<<<<<<< HEAD
    const { invalid, submitting, buttonSaveLoading, buttonSave} = this.props;
=======
    const {invalid, submitting, buttonSaveLoading, buttonSave, className} = this.props;
>>>>>>> 213b75f6da504c347b30f5e47abff48e278133ac
    return (
      <div>
        {/*error &&
        <FormGroup validationState="error">
          <HelpBlock>{error}</HelpBlock>
        </FormGroup>*/}

        <FormGroup className="submit">
          <Button type="submit" bsStyle="primary" className={className} disabled={invalid || submitting}>
            {submitting ?
              (buttonSaveLoading ? buttonSaveLoading : 'Saving...') :
              (buttonSave ? buttonSave : 'Save')}
          </Button>
        </FormGroup>
      </div>
    );
  }
}

// prop checks
FormSubmit.propTypes = {
  error: PropTypes.string,  // redux-form general `_error` message
  invalid: PropTypes.bool,  // redux-form invalid prop
  submitting: PropTypes.bool,   // redux-form invalid submitting
  buttonSaveLoading: PropTypes.string, // save button loading text, default is "Saving..."
  buttonSave: PropTypes.string,    // save button text, default is "Save"
};
