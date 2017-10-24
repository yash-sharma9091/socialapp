import React, {Component} from 'react';
import StripeForm from './common/StripeForm';
import {Elements} from 'react-stripe-elements';

class NewCard extends Component {
	
	render() {
		const {user, reload} = this.props;
		return (
            <Elements>
            	<StripeForm reload={reload} user={user}/>
            </Elements>
		);
	}
}

export default NewCard;