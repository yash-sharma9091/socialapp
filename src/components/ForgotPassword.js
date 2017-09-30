import React from 'react';

const ForgotPassword = () => (
	<div className="sign_con">
		<div className="sign_con_inner forfot_lay">
	    	<div className="signhd">Forgot Password?</div>
	    	<div className="form supporfom">
	      		<div className="supporfom_txt">Enter your e-mail address below to reset your password.</div>
	      		<div className="form-group">
	        		<label >Emaid id</label>
	        		<input type="text" className="form-control input_both" id="Password" placeholder="Emaid id"/>
      			</div>
	      		<div className="group margin-bot10">
	          		<button type="button" className="btn btn-default yellobtn rpl">Submit</button>
	      		</div>
	    	</div>
	  	</div>
	</div>
);

export default ForgotPassword;