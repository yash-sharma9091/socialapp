import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Header from './components/Header';
import LoginForgotReset from './components/LoginForgotReset';

export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			<Header/>
			<Switch>
				<Route path="/" exact={true} component={Main} />
		    	<Route path="/login" component={LoginForgotReset} />
		    	<Route path="/forgot-password" component={LoginForgotReset} />
		    	<Route path="/reset-password" component={LoginForgotReset} />
		    	<Route path="/pricing" component={Pricing} />
		  	</Switch>
		 </div>	 	
		</ConnectedRouter>
	);	
}