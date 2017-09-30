import React from 'react';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';

import {style} from './common/StyleBanner'; 

const Login = (props) => {
	
	return (
		<section className="loginsection" style={style}>
		  	<div className="container">
		    	{props.location.pathname === '/login' ? 
		    	<LoginForm/> :
		    	<ForgotPassword/>}
		  	</div>  
		</section>
	);
}

export default Login;