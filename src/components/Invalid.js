import React from 'react';
import EmoticonSad from '../images/emoticon-sad.png';
import {ImageStyle} from './common/CustomStyle'; 
const Invalid = () => (
	<div className="sign_con">
		<div className="sign_con_inner forfot_lay">
	    	<div className="signhd">Invalid or Expired Link</div>
	    	<h4 className="text-center">Enter your e-mail address below to reset your password.</h4>
	    	<img className="img-rounded" style={ImageStyle} src={EmoticonSad} alt="EmoticonSad"/>
	  	</div>
	</div>
);

export default Invalid;