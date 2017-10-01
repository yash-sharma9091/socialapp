import React from 'react';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Invalid from './Invalid';
import NotFound from './NotFound';
import {style} from './common/CustomStyle'; 

const Login = (props) => {
	let component, pathname = props.location.pathname;

	if(  pathname === '/login' ) {
		component = <LoginForm/>;
	} else if( pathname === '/forgot-password' ) {
		component = <ForgotPassword/>;
	} else if( pathname.includes('/reset-password') ) {
		component = <ResetPassword token={props.match.params.token}/>;
	} else if( pathname === '/invalid' ) {
		component = <Invalid/>;
	} else {
		component = <NotFound/>;
	}
	return (
		<section className="loginsection" style={style}>
		  	<div className="container">
		    	{ component }
		  	</div>  
		</section>
	);
}

export default Login;