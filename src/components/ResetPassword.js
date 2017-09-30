import React from 'react';

const ResetPassword = () => (
	<div className="sign_con">
		<div className="sign_con_inner forfot_lay">
	    	<div className="signhd">Reset Password?</div>
	    	<div className="form supporfom">
	      		<div className="supporfom_txt">Enter new password below to reset your current password.</div>
	      		<div className="form-group">
	        		<label >New Password</label>
	        		<input type="password" className="form-control input_both" id="Password" placeholder="New Password"/>
      			</div>
      			<div className="form-group">
	        		<label >Confirm Password</label>
	        		<input type="password" className="form-control input_both" id="Password" placeholder="Confirm Password"/>
      			</div>
	      		<div className="group margin-bot10">
	          		<button type="button" className="btn btn-default yellobtn rpl">Reset</button>
	      		</div>
	    	</div>
	  	</div>
	</div>
);

export default ResetPassword;