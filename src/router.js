import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Dashboard from './components/Dashboard';
import PrivateRoute from './router/PrivateRoute';
import BeforeAuthRoute from './router/BeforeAuthRoute';
import ContactUs from './components/ContactUs';
import CMS from './components/CMS';
import Profile from './components/Profile';
import MySubscriptions from './components/MySubscriptions';
import ViewClientList from './components/ViewClientList';

export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			<Header/>
			<Switch>
				<Route path="/" exact={true} component={Home} />
		    	<BeforeAuthRoute path="/login" component={Wrapper} />
		    	<BeforeAuthRoute path="/register" component={Wrapper} />
		    	<BeforeAuthRoute path="/forgot-password" component={Wrapper} />
		    	<BeforeAuthRoute path="/reset-password/:token" component={Wrapper} />
		    	<Route path="/invalid" component={Wrapper} />
		    	<Route path="/pricing" component={Pricing} />
		    	<Route path="/contact-us" component={ContactUs} />
		    	<PrivateRoute path="/dashboard" component={Dashboard} />
		    	<PrivateRoute path="/profile" component={Profile} />
		    	<PrivateRoute path="/change-password" component={Profile} />
		    	<PrivateRoute path="/my-subscriptions" component={MySubscriptions} />
		    	<PrivateRoute path="/client-list" component={ViewClientList} />
		    	<Route path="/:slug" component={CMS} />
		    	<Route path="*" component={Wrapper} />
		  	</Switch>
		  	<Footer/>
		 </div>	 	
		</ConnectedRouter>
	);	
}