import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Header from './components/Header';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Wrapper from './components/Wrapper';

export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			<Header/>
			<Switch>
				<Route path="/" exact={true} component={Main} />
		    	<Route path="/login" component={Wrapper} />
		    	<Route path="/forgot-password" component={Wrapper} />
		    	<Route path="/reset-password/:token" component={Wrapper} />
		    	<Route path="/invalid" component={Wrapper} />
		    	<Route path="/pricing" component={Pricing} />
		    	<Route path="*" component={Wrapper} />
		  	</Switch>
		 </div>	 	
		</ConnectedRouter>
	);	
}