import React from 'react';
import Login from '../Login';
import Register from '../Register';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';
import Invalid from '../Invalid';
import NotFound from '../NotFound';

export function exportPath(props) {
	const pathname = props.location.pathname;
	if( pathname.lastIndexOf('/') !== pathname.indexOf('/') ){
		return pathname.substr(1, pathname.lastIndexOf('/') - 1);
	}
	return pathname.substr(1);
}
export function MatchComponentPath(props) {
	const pathname = exportPath(props);
	switch(pathname) {
		case 'login':
			return <Login/>;

		case 'register':
			return <Register pathname={pathname} location={props.location}/>;

		case 'forgot-password':
			return <ForgotPassword/>;

		case 'reset-password':
			return <ResetPassword token={props.match.params.token}/>;

		case 'invalid':
			return <Invalid/>;

		default:
			return <NotFound/>;
	}
}