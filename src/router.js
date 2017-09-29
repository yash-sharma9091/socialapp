import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PrivateRoute from './router/PrivateRoute';
import Header from './components/Header';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Header from './components/Header';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';

export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			<Header/>
			<Switch>
				<Route path="/" exact={true} component={Main} />
		    	<Route path="/login" component={Login} />
		    	<Route path="/pricing" component={Pricing} />
		  	</Switch>
		 </div>	 	
		</ConnectedRouter>
	);	
}