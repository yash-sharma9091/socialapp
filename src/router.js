import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import TermsToUse from './components/TermsToUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';

export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			<Header/>
			<Switch>
				<Route path="/" exact={true} component={Home} />
		    	<Route path="/login" component={Wrapper} />
		    	<Route path="/register" component={Wrapper} />
		    	<Route path="/forgot-password" component={Wrapper} />
		    	<Route path="/reset-password/:token" component={Wrapper} />
		    	<Route path="/reset-password/:token" component={Wrapper} />
		    	<Route path="/invalid" component={Wrapper} />
		    	<Route path="/pricing" component={Pricing} />
		    	<Route path="/terms-to-use" component={TermsToUse} />
		    	<Route path="/privacy-policy" component={PrivacyPolicy} />
		    	<Route path="/contact-us" component={ContactUs} />
		    	<Route path="*" component={Wrapper} />
		  	</Switch>
		  	<Footer/>
		 </div>	 	
		</ConnectedRouter>
	);	
}