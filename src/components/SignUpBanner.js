import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const SignUpBanner = () => (
	<div className="right_sign">
		<div className="right_sign_inner">
	      	<div className="right_sign_cell">
	        	<div className="sign_up_lay">
	          		<div className="signhd signhd_gray">Sign up</div>
	      			<p>Please enter your details to sign up and increase your website conversions.</p>
	      			<LinkContainer to="/register">
	      				<button type="button" className="btn btn-default graybtn rpl">Sign up</button>
	      			</LinkContainer>	
	        	</div>  
	      	</div>
		</div>  
	</div>
);

export default SignUpBanner;