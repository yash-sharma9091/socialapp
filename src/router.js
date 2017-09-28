import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Main from './components/Main';
import Login from './components/Login';

export const Router = props => {
	const { history } = props;
	return (
		<ConnectedRouter history={history}>
			<Switch>
		    	<Route path="/login" component={Login} />
		    	<Route path="/" component={Main} />
		  	</Switch>
		</ConnectedRouter>
	);	
}