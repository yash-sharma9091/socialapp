import React from 'react';
import EmoticonSad from '../images/emoticon-sad.png';
import {ImageStyle} from './common/CustomStyle'; 
const NotFound = () => {
	return (
		<div className="sign_con">
			<div className="sign_con_inner forfot_lay">
		    	<div className="signhd">404 Page Not Found</div>
		    	<img className="img-rounded" style={ImageStyle} src={EmoticonSad} alt="EmoticonSad"/>
		  	</div>
		</div>
	);
}	

export default NotFound;