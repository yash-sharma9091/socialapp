import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import AccountSetUp from './AccountSetUp';
import Subscription from './Subscription';
import ConfirmPayment from './ConfirmPayment';
import {Elements} from 'react-stripe-elements';

class Register extends Component {
	render() {
		const {pathname, location} = this.props;
		let _activePathName = '';
		if( location.search !== "" ){
			_activePathName = new URLSearchParams(location.search).get('next');
		} else if(pathname === 'register') {
			_activePathName = 'register';
		}
		return(
		    <div className="sign_con clearfix">
		        <div className="sign_con_inner pull-right">
		            <div className="signhd">register Yourself</div>
		            <div className="progressbar_step">
		            	<ul id="progressbar">
		                	<li className={_activePathName === 'register'? "active":"complete"}>Set your account</li>
		                	<li className={_activePathName === 'subscription'? "active":""}>Select subscription </li>
		                	{/*<li>confirm payment</li>*/}
		              	</ul>
		            </div>
		            <div className="form supporfom">
		              	{_activePathName === 'register' && <Elements><ConfirmPayment/></Elements>}
		              	{_activePathName === 'subscription' && <Subscription/>}
		            </div>
		        </div>
		      	<div className="right_sign right_signup">
		        	<div className="right_sign_inner">
		          		<div className="right_sign_cell">
		            		<div className="sign_up_lay">
		              			<div className="signhd signhd_gray">Sign In</div>
		              			<p>Please enter your details to sign in and increase your website conversions.</p>
		              			<LinkContainer to="/login">
		              				<button type="button" className="btn btn-default graybtn rpl">Sign in</button>
		              			</LinkContainer>	
		            		</div>  
		          		</div>
		        	</div>  
		      	</div> 
		    </div>  
		);
	}
	
} 
export default Register;